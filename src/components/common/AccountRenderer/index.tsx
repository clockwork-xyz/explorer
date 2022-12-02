import { BN, web3 } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { useSearch } from "contexts/SearchContext";
import { useSolana } from "contexts/SolanaContext";
import { FC, useMemo } from "react";
import { getExplorerAccountLink } from "utils/general";
import { DataTable, DataTableRow, DataTableRowExpandable } from "../DataTable";
import { DataTableRowAccount } from "../DataTable/DataTableRowAccount";
import { toSentenceCase } from "utils/toSentenceCase";
import { DataTableRowBuffer } from "../DataTable/DataTableRowBuffer";

export const AccountRenderer = () => {
  const { data } = useSearch();

  if (!data)
    return <div className="py-6 rounded-lg flex flex-col space-y-6"></div>;
  console.log({ data });

  return (
    <div className="py-6 rounded-lg flex flex-col mb-6">
      <h2 className="text-2xl text-[#0E1114] dark:text-white font-semibold font-header leading-5 mb-6">
        {data.accountType[0].toUpperCase() + data.accountType.slice(1)}
      </h2>
      <DataTable>
        <RecursiveAccountRenderer account={data.account || data.accountInfo} />
      </DataTable>
    </div>
  );
};

const tryIsBuffer = (value: any) => {
  try {
    console.log("value: ", value);
    return Buffer.isBuffer(value);
  } catch (error) {
    return false;
  }
};

const tryIntoPubkey = (value: any) => {
  try {
    console.log("value: ", value);
    return new PublicKey(value).toBase58();
  } catch (error) {
    return false;
  }
};

const tryIsAccounts = (value: any) => {
  try {
    console.log("value: ", value);
    return new PublicKey(value).toBase58();
  } catch (error) {
    return false;
  }
};

export const RecursiveAccountRenderer: FC<{ account: Record<any, any> }> = ({
  account,
}) => {
  const { cluster } = useSolana();
  let entries = useMemo(() => Object.entries(account), [account]);

  const mapEntriesToComponents = (entries: [string, any][], depth = 0) => {
    return entries.map(([name, value], i) => {
      const label = toSentenceCase(name);

      if (typeof value === "boolean") {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={label}
            depth={depth}
            value={value ? "true" : "false"}
          />
        );
      }

      if (typeof value === "string") {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={label}
            depth={depth}
            value={value}
          />
        );
      }

      if (typeof value === "number") {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={label}
            depth={depth}
            value={value}
          />
        );
      }

      if (value instanceof web3.PublicKey || value instanceof PublicKey) {
        const link = getExplorerAccountLink(value, cluster.network);
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={label}
            depth={depth}
            value={value.toBase58()}
            link={link}
          />
        );
      }

      if (value instanceof BN) {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={label}
            depth={depth}
            value={value.toString()}
            fontMono
          />
        );
      }

      if (tryIsBuffer(value)) {
        return (
          <DataTableRowBuffer
            key={`${name}_${i}_${depth}`}
            label={label}
            depth={depth}
            value={value}
          />
        );
      }

      if (typeof value === "object") {
        if (name === "accounts") {
          return (
            <>
              {Object.entries(value).map(([index, accountIx]) => {
                const { pubkey, isWritable, isSigner } = accountIx as {
                  pubkey: PublicKey;
                  isWritable: boolean;
                  isSigner: boolean;
                };
                return (
                  <DataTableRowAccount
                    key={name + index}
                    link={getExplorerAccountLink(pubkey, cluster.network)}
                    label={`Account #${parseInt(index) + 1}`}
                    pubkey={pubkey}
                    isSigner={isSigner}
                    isWritable={isWritable}
                    depth={depth}
                  />
                );
              })}
            </>
          );
        }

        try {
          const children = mapEntriesToComponents(
            Object.entries(value),
            depth + 1
          );
          return (
            <DataTableRowExpandable label={label} depth={depth}>
              {children}
            </DataTableRowExpandable>
          );
        } catch (error) {
          console.error(value);
        }
      }
    });
  };

  return <>{mapEntriesToComponents(entries, 0)}</>;
};
