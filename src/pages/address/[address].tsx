import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Custom404 from "pages/404";
import { getLayout } from "../../components/layouts/SiteLayout";
import { DataTable } from "components/common/DataTable";
import { RecursiveAccountRenderer } from "components/common/AccountRenderer";

import { useAddressAll } from "hooks/useAddressAll";
import { useAddressSignatures } from "hooks/useAddressSignatures";
import { AccountTableTitle } from "components/common/AccountTableTitle";
import { Loader } from "components/common/Loader";
import { CopyButton } from "components/common/CopyButton";
import Link from "next/link";
import { getExplorerBlockLink, getExplorerLink } from "@clockwork-xyz/sdk";
import { useSolana } from "contexts/SolanaContext";
import { format, formatDistanceToNowStrict } from "date-fns";
import { useWallet } from "@solana/wallet-adapter-react";

// Write a function to use the getSignaturesForAddress RPC endpoint to display a table of the recent transactions an account has been included in. This table should be displayed on all account templates in the /address/* path. https://docs.solana.com/developing/clients/jsonrpc-api#getsignaturesforaddress

export const AddressSignaturesTable = () => {
  const { connected, connecting } = useWallet();
  const router = useRouter();
  const { cluster, customEndpoint } = useSolana();
  const { address } = router.query;
  const { data, error, loading, reset } = useAddressSignatures(
    address as string
  );

  if (!connected) {
    router.push("/");
  }

  console.log({ data, error, loading, reset });
  return (
    <div className="py-6 rounded-lg flex flex-col mb-6">
      <AccountTableTitle accountType={"Transaction History"} account={data} />
      <div className="bg-[#F8F9F9] dark:bg-[#393939]  dark:border-[#626262] rounded-lg">
        <div className="overflow-x-scroll">
          <table className="table-auto border-collapse">
            <thead className="text-sm text-[#0E1114] dark:text-[#979797]">
              <tr>
                <td className="p-4 whitespace-nowrap text-sm">Signature</td>
                <td className="p-4 whitespace-nowrap text-sm">Block</td>
                <td className="p-4 whitespace-nowrap text-sm">Age</td>
                <td className="p-4 whitespace-nowrap text-sm">Timestamp</td>
                <td className="p-4 whitespace-nowrap text-sm">Result</td>
              </tr>
            </thead>
            <tbody className="text-[13px] text-[#0E1114] dark:text-white">
              {data?.map((signatureInfo) => {
                return (
                  <tr
                    className="border-t border-b dark:border-[#626262] min-w-full"
                    key={signatureInfo.signature}
                  >
                    <td className="whitespace-nowrap p-0">
                      <span
                        // rel="noopener noreferrer"
                        className={`p-4 whitespace-nowrap flex justify-end items-center space-x-2`}
                      >
                        <CopyButton valueToCopy={signatureInfo.signature} />
                        <Link
                          passHref
                          href={getExplorerLink(
                            signatureInfo.signature,
                            cluster.network
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            <p className="space-x-2   hover:underline font-light font-['IBM_Plex_Mono']">
                              {signatureInfo.signature.slice(0, 45) + "..."}
                            </p>
                            {/* <ArrowUpIcon className="h-4 w-4 cursor-pointer rotate-45" /> */}
                          </div>
                        </Link>
                      </span>
                    </td>
                    <td className="whitespace-nowrap p-0">
                      <span
                        // rel="noopener noreferrer"
                        className={`p-4 whitespace-nowrap flex justify-end items-center space-x-2`}
                      >
                        <CopyButton valueToCopy={signatureInfo.slot} />
                        <Link
                          passHref
                          href={getExplorerBlockLink(
                            signatureInfo.slot,
                            cluster.network
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            <p className="space-x-2   hover:underline font-light font-['IBM_Plex_Mono']">
                              {formatSlotNumber(signatureInfo.slot)}
                            </p>
                            {/* <ArrowUpIcon className="h-4 w-4 cursor-pointer rotate-45" /> */}
                          </div>
                        </Link>
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <p className="space-x-2 font-light font-['IBM_Plex_Mono'] dark:text-[#979797]">
                        {formatDistanceToNowStrict(
                          new Date(signatureInfo.blockTime * 1000)
                        )}
                      </p>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <p className="space-x-2 font-light font-['IBM_Plex_Mono'] dark:text-[#979797]">
                        {formatTimestamp(signatureInfo.blockTime)}
                      </p>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <p className="space-x-2 font-light font-['IBM_Plex_Mono'] dark:text-[#979797]">
                        {signatureInfo.err ? "Failed" : "Success"}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!loading && (
            <div className="flex self-center items-center w-full justify-center px-6 py-4">
              <span className="whitespace-nowrap w-full text-sm text-center justify-self-center">
                {data && data.length === 0
                  ? "No transactions found"
                  : "Fetched full history"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const formatTimestamp = (unixTimestamp: number) => {
  const date = new Date();

  return format(unixTimestamp * 1000, "MMM d, yyyy HH:mm:ss xxxx");
};

// adds commas to every 3 numbers for readability
const formatSlotNumber = (num: number) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const AddressPage = () => {
  const router = useRouter();
  const { address } = router.query;
  const { data, error, loading, reset } = useAddressAll(address as string);

  useEffect(() => {
    return () => reset();
  }, [reset]);

  if (loading) return <Loader />;

  if (data) {
    return (
      <>
        <div className="py-6 rounded-lg flex flex-col mb-6">
          <AccountTableTitle accountType={data.accountType} account={data} />
          <DataTable>
            <RecursiveAccountRenderer
              account={data.account || data.accountInfo}
              address={address as string}
            />
          </DataTable>
        </div>
        <AddressSignaturesTable />
      </>
    );
  }

  if (error && error?.message) {
    const missingThreadRegExp = new RegExp("Account does not exist", "i");
    if (error.message.match(missingThreadRegExp)) {
      return <Custom404 title={"Address not found!"} />;
    }
    const invalidPublicKeyRegExp = new RegExp("Invalid address.", "i");
    if (error.message.match(invalidPublicKeyRegExp)) {
      return <Custom404 title={"Invalid address."} />;
    }
    const accountNotFoundRegExp = new RegExp("Account not found.", "i");
    if (error.message.match(accountNotFoundRegExp)) {
      return <Custom404 title={"Account not found."} />;
    }
    return <Custom404 title={"Unexpected error."} />;
  }

  return null;
};

AddressPage.getLayout = (page: ReactNode) => getLayout(page, "Address");

export default AddressPage;
