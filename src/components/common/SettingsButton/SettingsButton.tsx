import { FC, useRef, useState } from "react";
import { CogIcon } from "@heroicons/react/outline";
import { useSolana } from "contexts/SolanaContext";
import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import { SettingsNetworkMenu } from "./SettingsNetworkMenu";

type SettingButtonProps = {};

export const SettingsButton: FC<SettingButtonProps> = () => {
  const { cluster } = useSolana();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(dropdownRef, showDropdown, () => setShowDropdown(false));

  return (
    <div className="relative flex justify-end" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="cursor-pointer dark:hover:bg-[#393939] flex px-6 py-3 space-x-2 items-center"
        data-cy="network-select-btn"
      >
        <CogIcon className="h-6 w-6 text-[#979797] dark:text-white" />
        <p className="text-sm text-[#0E1114] dark:text-white text-right">
          {cluster.label}
        </p>
      </button>
      <SettingsNetworkMenu open={showDropdown} />
    </div>
  );
};
