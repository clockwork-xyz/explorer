import { FC, useEffect } from "react";
import { useLocalStorage } from "@solana/wallet-adapter-react";

import {
  CLUSTERS,
  CUSTOM_RPC_CLUSTER,
  useSolana,
} from "contexts/SolanaContext";
import { toast } from "react-toastify";
import { SettingsProgramSelectorMenu } from "./SettingsProgramSelectorMenu";

type SettingsNetworkMenuProps = {
  open?: boolean;
};

export const SettingsNetworkMenu: FC<SettingsNetworkMenuProps> = ({
  open = false,
}) => {
  const { setCustomEndpoint, cluster, setCluster, isActiveCluster } =
    useSolana();

  const [endpoint, setEndpoint] = useLocalStorage(
    "customRPC",
    CUSTOM_RPC_CLUSTER.endpoint
  );

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    if (cluster.network === "custom") {
      debounceTimer = setTimeout(() => {
        try {
          const endpointURL = new URL(endpoint);
          setCustomEndpoint(endpointURL.toString());
          toast.success("RPC endpoint updated!");
        } catch (e) {
          console.error(e);
          toast.error("Invalid RPC endpoint");
          setCustomEndpoint(CUSTOM_RPC_CLUSTER.endpoint);
        }
      }, 1500);
    }

    return () => clearTimeout(debounceTimer);
    // TODO: setCustomEndpoint is changing, and hence the useEffect keeps running, need to solve?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  const handleCustomRPC = (endpoint: string) => {
    setCluster(CUSTOM_RPC_CLUSTER);
    setCustomEndpoint(endpoint);
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } absolute top-full w-screen max-w-lg my-4 py-3 bg-white dark:bg-[#2C2B2B] rounded-lg flex flex-col drop-shadow-3xl z-50`}
    >
      <div className="py-2">
        <ul>
          {CLUSTERS.map((cluster) => {
            if (cluster.label !== "Custom RPC")
              return (
                <li
                  key={cluster.endpoint}
                  onClick={() => setCluster(cluster)}
                  className={`${
                    isActiveCluster(cluster)
                      ? "bg-[#F2F3F3] dark:bg-[#393939]"
                      : "bg-white dark:bg-[#2C2B2B]"
                  } hover:bg-[#F2F3F3] dark:hover:bg-[#393939] p-2 px-8 cursor-pointer`}
                >
                  <div>
                    <h3 className="text-[#0E1114] text-lg dark:text-[#FFFFFF] font-medium font-['Inter'] mb-1">
                      {cluster.label}
                    </h3>
                    <p className="text-[#979797] dark:text-[#979797] text-xs">
                      {cluster.endpoint}
                    </p>
                  </div>
                </li>
              );
          })}
          <li
            className={`${
              isActiveCluster(CUSTOM_RPC_CLUSTER)
                ? "bg-[#F2F3F3] dark:bg-[#393939]"
                : "bg-white dark:bg-[#2C2B2B]"
            } hover:bg-[#F2F3F3] dark:hover:bg-[#393939] p-2 px-8 cursor-pointer`}
            onClick={() => handleCustomRPC(endpoint)}
          >
            <div>
              <h3 className="text-[#0E1114] text-lg dark:text-[#FFFFFF] font-medium font-['Inter'] mb-1">
                Custom RPC
              </h3>
              {cluster.label === "Custom RPC" ? (
                <input
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="border border-[#979797] text-[#0E1114] text-sm dark:text-white p-2 px-3 rounded-lg my-2 w-full bg-[#E7EAED] dark:bg-[#393939] focus:outline-none"
                  data-testid="custom-rpc-input"
                />
              ) : null}
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full flex px-6 pt-1 pb-2">
        <div className="border-[#E7EAED] dark:border-[#BFBFBF] border-b flex-1" />
      </div>
      <SettingsProgramSelectorMenu />
    </div>
  );
};
