import useSWR from "swr";

export function useQueuesSWR(program: any, suspense = false) {
  const shouldFetch = !!program;

  const result = useSWR(
    shouldFetch ? ["useQueuesSWR"] : null,
    async () => {
      const queues = await program.account.queue.all();

      return queues.sort(
        (a, b) =>
          b.account.createdAt.unixTimestamp.toNumber() -
          a.account.createdAt.unixTimestamp.toNumber()
      );
    },
    {
      suspense,
    }
  );

  return result;
}
