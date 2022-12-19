import { useMediaQuery } from "react-responsive";
import { shortenAddress } from "@clockwork-xyz/sdk";

export const ThreadCard = ({ thread }: { thread: any }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

  return (
    <div className="hover:bg-[#E7EAED] dark:hover:bg-[#393939] transition-colors py-2 rounded-lg flex items-center justify-between border border-[#D7DCE1] dark:border-[#4F4F4F]">
      <div className="flex flex-col border-r dark:border-[#4F4F4F] pl-6 w-60">
        <h3 className="text-xs text-[#979797] mb-2.5">Name</h3>
        <p className="font-normal leading-relaxed text-sm text-[#0E1114] dark:text-white">
          {thread.account.name || thread.account.id}
        </p>
      </div>

      <div className="flex-1 pl-6 flex-col">
        <h3 className="text-xs text-[#979797] mb-2.5">Address</h3>
        <p className="font-normal leading-relaxed text-sm text-[#0E1114] dark:text-white">
          {isMobile
            ? shortenAddress(thread.publicKey.toString(), 10)
            : thread.publicKey.toString()}
        </p>
      </div>
    </div>
  );
};
