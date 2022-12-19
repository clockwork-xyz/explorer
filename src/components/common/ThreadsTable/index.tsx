import React, { useState } from "react";
import Link from "next/link";
import { useThreads } from "hooks/useThreads";
import { SkeletonBox } from "../Skeleton";
import { usePagination } from "hooks/usePagination";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import { PaginationButton } from "../Pagination/PaginationButton";
import {
  HelloWorldThread,
  DollarCostAvgThread,
  PaymentThread,
  PresetNameThread,
  SerumCrankThread,
} from "../CreateQueue";
import { ThreadTableRow } from "../ThreadTableRow";

const exampleThreads = [
  <HelloWorldThread key={0} />,
  <DollarCostAvgThread key={1} />,
  <PaymentThread key={2} />,
  <PresetNameThread key={3} />,
  <SerumCrankThread key={4} />,
];

export const ThreadsTable = () => {
  const { data, error, loading } = useThreads();

  const [filterString, setFilterString] = useState("");

  const {
    pageData: pageMarkets,
    totalPages,
    pageNumber,
    prevPage,
    nextPage,
  } = usePagination(data, 10, filterString);

  if (loading) {
    return (
      <div className="flex flex-col space-y-5">
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
      </div>
    );
  }


  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="flex w-full">
          <div className="font-normal text-[#0E1114] dark:text-white text-[14px] leading-relaxed tracking-wide flex w-full py-4 px-4  border-b border-t border-1 border-[#E7EAED] dark:border-[#4F4F4F]">
            <div className="w-full max-w-[120px] md:max-w-[240px] lg:max-w-[300px] pr-4">
              Name
            </div>
            <div className="flex-1">Address</div>
            <div>Last Transaction</div>
          </div>
        </div>
        <div>
          {pageMarkets.map((thread) => (
            <ThreadTableRow key={thread.publicKey.toBase58()} thread={thread} />
          ))}
        </div>
      </div>
      {totalPages > 1 ? (
        <div className="flex items-center justify-between">
          <PaginationButton type="prev" onClick={prevPage} />
          <p
            id="page_number"
            className="text-sm text-[#979797]"
          >{`${pageNumber} of ${totalPages}`}</p>
          <PaginationButton type="next" onClick={nextPage} />
        </div>
      ) : null}
    </>
  );
};
