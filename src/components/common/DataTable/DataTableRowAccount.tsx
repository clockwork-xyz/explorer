import { ArrowUpIcon } from "@heroicons/react/outline";
import { PublicKey } from "@solana/web3.js";
import Link from "next/link";
import { CopyButton } from "../CopyButton";

export const DataTableRowAccount = ({
  label,
  pubkey,
  isSigner,
  isWritable,
  link,
  fontMono = false,
  depth = 0,
}: {
  label: string;
  pubkey: PublicKey;
  isWritable: boolean;
  isSigner: boolean;
  link: string;
  fontMono?: boolean;
  depth?: number;
}) => {
  return (
    <div
      style={{ paddingLeft: depth * 16 }}
      className={`flex justify-between  text-[#979797] w-full`}
    >
      <div className="whitespace-nowrap p-0">
        <p className={`text-sm py-4 px-4  md:px-8`}>{label}</p>
      </div>
      <div className="whitespace-nowrap p-0">
        <span
          // rel="noopener noreferrer"
          className={`py-4 px-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2`}
        >
          <CopyButton valueToCopy={pubkey.toBase58()} />
          <Link href={link}>
            <a>
              <div className="flex items-center space-x-2">
                <p className="space-x-2 text-sm text-[#0E1114] dark:text-white hover:underline font-light font-['IBM_Plex_Mono']">
                  {pubkey.toBase58()}
                </p>
                <ArrowUpIcon className="h-4 w-4 cursor-pointer hover:text-[#0E1114] hover:dark:text-white rotate-45" />
              </div>
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};
