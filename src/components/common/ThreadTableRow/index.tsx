import { useMediaQuery } from "react-responsive";
import { shortenAddress, Thread } from "@clockwork-xyz/sdk";
import Link from "next/link";
import { useRouter } from "next/router";
import { formatDistanceStrict } from "date-fns";

export const ThreadTableRow = ({ thread }: { thread: Thread }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const router = useRouter();

  console.log(thread);

  return (
    <Link
      passHref
      href={{
        pathname: `/address/${thread.publicKey.toString()}`,
        query: router.query,
      }}
    >
      <div className="cursor-pointer flex w-full leading-relaxed text-sm text-[#0E1114] dark:text-white py-4 px-4 border-b border-1 border-[#E7EAED] dark:border-[#4F4F4F] hover:bg-[#E7EAED] dark:hover:bg-[#393939] transition-colors">
        <div className="w-full max-w-[160px] md:max-w-[240px] lg:max-w-[300px] pr-4">
          {thread.account.name || thread.account.id}
        </div>
        <div className="flex-1 font-mono">
          {isMobile
            ? shortenAddress(thread.publicKey.toString(), 8)
            : thread.publicKey.toString()}
        </div>
        <div className="pl-4">{formatDistanceStrict(thread.account.createdAt.unixTimestamp.toNumber() * 1000, Date.now())} ago</div>
        {/* <Link
        passHref
        href={{
          pathname: `/address/${thread.publicKey.toString()}`,
          query: router.query,
        }}
      >
        <div className="hover:bg-[#E7EAED] dark:hover:bg-[#393939] transition-colors py-2 rounded-lg flex items-center justify-between border border-[#D7DCE1] dark:border-[#4F4F4F]">
          <div className="flex flex-col border-r dark:border-[#4F4F4F] pl-6 w-60">
            <h3 className="text-xs text-[#979797] mb-2.5">Name</h3>
            <p className="font-normal leading-relaxed text-sm text-[#0E1114] dark:text-white"></p>
          </div>

          <div className="flex-1 pl-6 flex-col">
            <h3 className="text-xs text-[#979797] mb-2.5">Address</h3>
            <p className="font-normal leading-relaxed text-sm text-[#0E1114] dark:text-white">
              {isMobilex
                ? shortenAddress(thread.publicKey.toString(), 10)
                : thread.publicKey.toString()}
            </p>
          </div>
        </div>
      </Link> */}
      </div>
    </Link>
  );
};
