import React, { useState } from "react";
import Link from "next/link";
import { useThreads } from "hooks/useThreads";
import { SkeletonBox } from "../Skeleton";
import { usePagination } from "hooks/usePagination";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

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
import { ThreadsTable } from "../ThreadsTable";

const exampleThreads = [
  <HelloWorldThread key={0} />,
  <DollarCostAvgThread key={1} />,
  <PaymentThread key={2} />,
  <PresetNameThread key={3} />,
  <SerumCrankThread key={4} />,
];

export const Threads = () => {
  const [openCreateQueueModal, setOpenCreateQueueModal] = useState(false);
  const [tab, setTab] = useState(0);
  return (
    <>
      <Modal
        open={openCreateQueueModal}
        setOpen={setOpenCreateQueueModal}
        title="Create thread"
      >
        <hr className="bg-gray-200 dark:bg-[#626262] h-px border-0 my-4" />
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
              >
                New Automation
              </PrimaryButton>
            </div>
            <ThreadsTable />
          </div>
        </div>
      </div>
    </>
  );
};
