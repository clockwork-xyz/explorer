import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FC, useRef, useState } from "react";
import { KeyIcon } from "@heroicons/react/outline";
import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import { shortenAddress } from "@clockwork-xyz/sdk";

type WalletButtonProps = {
  className?: string;
};

export const WalletButton: FC<WalletButtonProps> = ({
  className,
}: WalletButtonProps) => {
  const wallet = useWallet();
  const { visible, setVisible } = useWalletModal();

  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(dropdownRef, showDropdown, () => setShowDropdown(false));

  return (
    <div className={`${className ?? ""} relative flex`} ref={dropdownRef}>
      <button
        onClick={
          wallet.connected
            ? () => {
                setShowDropdown(!showDropdown);
              }
            : () => setVisible(!visible)
        }
        className="text-[#0E1114] dark:text-white text-sm align-middle justify-center"
      >
        <div className="md:block hidden px-10 py-3">
          {wallet.connected
            ? shortenAddress(wallet.publicKey!.toString())
            : "Connect wallet"}
        </div>
        <div className="md:hidden p-2">
          <KeyIcon className="h-6 w-6" />
        </div>
      </button>
      <ul
        className={`${
          showDropdown ? "block" : "hidden"
        } absolute top-full w-64 my-2 py-2 bg-[#F8F9F9] dark:bg-[#393939] rounded-lg flex flex-col space-y-1`}
      >
        <li
          className={`hover:bg-[#E7EAED] dark:hover:bg-[#5A5A5A] p-2 cursor-pointer`}
          onClick={() => {
            wallet.disconnect();
            setShowDropdown(false);
          }}
        >
          <div>
            <h2 className="font-medium text-[#0E1114] dark:text-white">
              Disconnect
            </h2>
          </div>
        </li>
      </ul>
    </div>
  );
};
