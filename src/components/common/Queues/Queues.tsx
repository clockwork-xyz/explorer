import React, { useState } from "react";
import Link from "next/link";
import { useQueues } from "hooks/useQueues";
import { SkeletonBox } from "../Skeleton";
import { usePagination } from "hooks/usePagination";
import { useRouter } from "next/router";
import { PaginationButton } from "../Pagination/PaginationButton";
import { PrimaryButton } from "../Button";
import { Modal } from "../Modal";
import {
  HelloWorldThread,
  DollarCostAvgThread,
  PaymentThread,
  PresetNameThread,
  SerumCrankThread,
} from "../CreateQueue";
import Tabs from "../CreateQueue/Tabs";

const exampleThreads = [
  <HelloWorldThread key={0} />,
  <DollarCostAvgThread key={1} />,
  <PaymentThread key={2} />,
  <PresetNameThread key={3} />,
  <SerumCrankThread key={4} />,
];

export const Queues = () => {
  const router = useRouter();
  const { data, error, loading } = useQueues();

  const [filterString, setFilterString] = useState("");
  const [openCreateQueueModal, setOpenCreateQueueModal] = useState(false);

  const [tab, setTab] = useState(0);

  const {
    pageData: pageMarkets,
    totalPages,
    pageNumber,
    prevPage,
    nextPage,
  } = usePagination(data, 5, filterString);

  const QueueListItem = ({ queue }: { queue: any }) => {
    return (
      <div className="hover:bg-[#E7EAED] dark:hover:bg-[#393939] transition-colors py-2 rounded-lg flex items-center justify-between border border-[#D7DCE1] dark:border-[#4F4F4F]">
        <div className="flex flex-col border-r dark:border-[#4F4F4F] pl-6 w-60">
          <h3 className="text-xs text-[#979797] mb-2.5">Name</h3>
          <p className="font-normal leading-relaxed text-sm text-[#0E1114] dark:text-white">
            {queue.account.name || queue.account.id}
          </p>
        </div>

        <div className="flex-1 pl-6 flex-col">
          <h3 className="text-xs text-[#979797] mb-2.5">Address</h3>
          <p className="font-normal leading-relaxed text-sm text-[#0E1114] dark:text-white">
            {queue.publicKey.toString()}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Modal
        open={openCreateQueueModal}
        setOpen={setOpenCreateQueueModal}
        title="Create a thread"
      >
        <Tabs activeTab={tab} setActiveTab={setTab} />
        {exampleThreads[tab]}
      </Modal>
      <div className="flex flex-col space-y-4 items-stretch">
        <div className="flex flex-col">
          <div className="py-6 rounded-lg flex flex-col space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-[#0E1114] dark:text-white font-semibold font-header leading-5">
                Threads
              </h2>
              <PrimaryButton
                onClick={() => setOpenCreateQueueModal(true)}
                className="pt-3 pb-3"
              >
                Create Thread
              </PrimaryButton>
            </div>

            <input
              type="text"
              value={filterString}
              onChange={(e) => setFilterString(e.target.value)}
              placeholder="Filter by name or address"
              className="w-full p-2 rounded-lg border border-[#D7DCE1] dark:border-[#4F4F4F] bg-transparent focus:outline-none text-sm text-[#979797]"
              data-testid="filter-by-input"
            />
            {loading ? (
              <div className="flex flex-col space-y-5">
                <SkeletonBox />
                <SkeletonBox />
                <SkeletonBox />
                <SkeletonBox />
                <SkeletonBox />
              </div>
            ) : (
              <>
                <ul className="flex flex-col space-y-5 w-full">
                  {pageMarkets.map((queue: any) => (
                    <li
                      key={queue.publicKey.toString()}
                      className="cursor-pointer w-full"
                    >
                      <Link
                        passHref
                        href={{
                          pathname: `/address/${queue.publicKey.toString()}`,
                          query: router.query,
                        }}
                      >
                        <a>
                          <QueueListItem queue={queue} />
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <PaginationButton type="prev" onClick={prevPage} />
                  <p
                    id="page_number"
                    className="text-sm text-[#979797]"
                  >{`${pageNumber} of ${totalPages}`}</p>
                  <PaginationButton type="next" onClick={nextPage} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
