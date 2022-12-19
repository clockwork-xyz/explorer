import { BN, web3 } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { useSearch } from "contexts/SearchContext";
import { useSolana } from "contexts/SolanaContext";
import { FC, useMemo } from "react";
import {
  getExplorerAccountLink,
  tryIntoPubkey,
  tryIsBuffer,
  toSentenceCase,
} from "@clockwork-xyz/sdk";
import { DataTable, DataTableRow, DataTableRowExpandable } from "../DataTable";
import { DataTableRowAccount } from "../DataTable/DataTableRowAccount";
import { DataTableRowBuffer } from "../DataTable/DataTableRowBuffer";
import { AccountTableTitle } from "../AccountTableTitle";

export const AccountRenderer = () => {
  const { data, address } = useSearch();

  if (!data)
    return <div className=""></div>;

  console.log("data", data);
  return (
    <div className="py-6 rounded-lg flex flex-col mb-6">
      <AccountTableTitle accountType={data.accountType} account={data} />
      <DataTable>
        <RecursiveAccountRenderer
          account={data.account || data.accountInfo}
          address={address}
        />
      </DataTable>
    </div>
  );
};

const mapEntriesToComponents = (
  entries: [string, any][],
  depth = 0,
  clusterNetwork
) => {
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
      const link = getExplorerAccountLink(value, clusterNetwork);
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
                  link={getExplorerAccountLink(pubkey, clusterNetwork)}
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
          depth + 1,
          clusterNetwork
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

export const RecursiveAccountRenderer: FC<{
  account: Record<any, any>;
  address: string;
}> = ({ account, address }) => {
  const { cluster } = useSolana();
  let entries = useMemo(() => Object.entries(account), [account]);

  const addressPubkey = useMemo(() => tryIntoPubkey(address), [address]);

  const components = useMemo(() => {
    return mapEntriesToComponents(entries, 0, cluster.network);
  }, [entries, cluster.network]);

  return (
    <>
      {addressPubkey && (
        <DataTableRow
          key={`address`}
          label={"Address"}
          depth={0}
          value={address}
          link={getExplorerAccountLink(addressPubkey, cluster.network)}
        />
      )}
      {components}
    </>
  );
};
