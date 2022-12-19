import { FC, ReactNode } from "react";
import { AutoConnectProvider } from "./AutoConnectProvider";
import { AnchorProviderProvider } from "./AnchorProvider";
import { ClockworkProgramsProvider } from "./ClockworkProgramsContext";
import { SolanaProvider } from "./SolanaContext";
import { SearchProvider } from "./SearchContext";

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SolanaProvider>
      <AutoConnectProvider>
        <AnchorProviderProvider>
          <ClockworkProgramsProvider>
            <SearchProvider>{children}</SearchProvider>
          </ClockworkProgramsProvider>
        </AnchorProviderProvider>
      </AutoConnectProvider>
    </SolanaProvider>
  );
};
