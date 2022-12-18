import { createContext, ReactNode, useContext, useMemo } from "react";
import {
  ClockworkProgram,
  CLOCKWORK_NETWORK_PROGRAM_ADDRESS,
  CLOCKWORK_PROGRAMS_IDLS,
  CLOCKWORK_THREAD_PROGRAM_ADDRESS,
  // CLOCKWORK_WEBHOOK_PROGRAM_ADDRESS,
  HelloClockworkProgram,
  HELLO_CLOCKWORK_PROGRAM_ADDRESS,
  NetworkProgram,
  WebhookProgram,
} from "@clockwork-xyz/sdk";
import { Program } from "@project-serum/anchor";
import { useAnchorProvider } from "./AnchorProvider";
import { ThreadProgram } from "@clockwork-xyz/sdk";

type ClockworkProgramsProviderProps = {
  children: ReactNode;
};

const ClockworkProgramsContext = createContext<ClockworkProgram[] | null>(null);

export const ClockworkProgramsProvider = ({
  children,
}: ClockworkProgramsProviderProps) => {
  const anchorProvider = useAnchorProvider();

  const programs = useMemo(() => {
    const clockworkPrograms = Object.entries(CLOCKWORK_PROGRAMS_IDLS).map(
      ([programId, idls]) => {
        // default to first idl version for each program id.
        const [[firstIdlVersion, firstIdl]] = Object.entries(idls);
        return new Program(
          firstIdl,
          programId,
          anchorProvider
        ) as ClockworkProgram;
      }
    );
    return clockworkPrograms;
  }, [anchorProvider]);

  return (
    <ClockworkProgramsContext.Provider value={programs}>
      {children}
    </ClockworkProgramsContext.Provider>
  );
};

export const useClockworkPrograms = () => {
  const clockworkPrograms = useContext(ClockworkProgramsContext);

  if (!clockworkPrograms) {
    throw new Error(
      "Make sure to wrap your component with ClockworkProgramsProvider"
    );
  }

  return clockworkPrograms;
};

export const selectClockworkProgram =
  (programs: ClockworkProgram[]) => (programAddress: string) =>
    programs.find((program) => program.programId.toBase58() === programAddress);

export const useThreadProgram = () => {
  const programs = useClockworkPrograms();
  const program = selectClockworkProgram(programs)(
    CLOCKWORK_THREAD_PROGRAM_ADDRESS
  ) as ThreadProgram;
  if (!programs) {
    throw new Error("Thread program not found.");
  }
  return program;
};

export const useNetworkProgram = () => {
  const programs = useClockworkPrograms();
  const program = selectClockworkProgram(programs)(
    CLOCKWORK_NETWORK_PROGRAM_ADDRESS
  ) as NetworkProgram;
  if (!programs) {
    throw new Error("Network program not found.");
  }
  return program;
};

// export const useWebhookProgram = () => {
//   const programs = useClockworkPrograms();
//   const program = selectClockworkProgram(programs)(
//     CLOCKWORK_WEBHOOK_PROGRAM_ADDRESS
//   ) as WebhookProgram;
//   if (!programs) {
//     throw new Error("Network program not found.");
//   }
//   return program;
// };

export const useHelloClockworkProgram = () => {
  const programs = useClockworkPrograms();
  const program = selectClockworkProgram(programs)(
    HELLO_CLOCKWORK_PROGRAM_ADDRESS
  ) as HelloClockworkProgram;
  if (!programs) {
    throw new Error("Network program not found.");
  }
  return program;
};
