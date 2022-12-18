import { useThreadProgram } from "contexts/ClockworkProgramsContext";
import { useCallback, useEffect, useState } from "react";
import { Thread } from "@clockwork-xyz/sdk";

export type ThreadsHookState = {
  data: Thread[];
  error?: Error;
  loading?: boolean;
  refetch: () => void;
};

export const useThreads = () => {
  const program = useThreadProgram();

  const fetchThreadsCallback = useCallback(async () => {
    setThreadsState((prev) => ({ ...prev, data: [], loading: true, error: undefined }));
    try {
      const threads = await program.account.thread.all();
      setThreadsState((prev) => ({
        ...prev,
        data: threads.sort(
          (a, b) =>
            b.account.createdAt.unixTimestamp.toNumber() -
            a.account.createdAt.unixTimestamp.toNumber()
        ),
        error: undefined,
        loading: false,
      }));
    } catch (error) {
      console.error(error);
      setThreadsState((prev) => ({
        ...prev,
        error: error,
        loading: false,
      }));
    }
  }, [program]);

  const [threadsState, setThreadsState] = useState<ThreadsHookState>({
    data: [],
    refetch: fetchThreadsCallback,
  });

  useEffect(() => {
    fetchThreadsCallback();
  }, [program]);

  return threadsState;
};
