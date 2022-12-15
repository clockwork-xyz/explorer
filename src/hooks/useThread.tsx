import { useClockworkProgram } from "contexts/ThreadProgramProvider";
import { useCallback, useEffect, useState } from "react";
import { Thread } from "@clockwork-xyz/sdk";
import { PublicKey } from "@solana/web3.js";

export type ThreadsHookState = {
  data: Thread;
  error?: Error;
  loading?: boolean;
  refetch: () => void;
};

export const useThread = (address: string) => {
  const program = useClockworkProgram();

  const fetchThreadCallback = useCallback(async () => {
    setThreadsState((prev) => ({
      ...prev,
      data: undefined,
      loading: true,
      error: undefined,
    }));
    try {
      const account = await program.account.thread.fetch(address);
      const queue = { publicKey: new PublicKey(address), account: account };
      setThreadsState((prev) => ({
        ...prev,
        data: queue,
        error: undefined,
        loading: false,
      }));
    } catch (error) {
      setThreadsState((prev) => ({
        ...prev,
        error: error,
        loading: false,
      }));
    }
  }, [program, address]);

  const [queuesState, setThreadsState] = useState<ThreadsHookState>({
    loading: true,
    data: undefined,
    error: undefined,
    refetch: fetchThreadCallback,
  });

  useEffect(() => {
    fetchThreadCallback();
  }, [program, address]);

  return queuesState;
};
