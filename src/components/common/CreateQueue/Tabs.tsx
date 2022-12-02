import React from "react";
import ReactTooltip from "react-tooltip";

export const threadTitles: string[] = [
  "Hello world",
  "Payments",
  "Dollar Cost Averaging",
  "Serum Crank",
  "Preset name",
];

type TabsType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

export default function Tabs({ activeTab, setActiveTab }: TabsType) {
  return (
    <div>
      {threadTitles.map((title: string, index: number) => {
        return (
          <button
            key={`button_${title}_${index}`}
            onClick={() => setActiveTab(index)}
            className={`btn px-3 py-1 mr-1 my-1 ${
              activeTab === index
                ? "border border-gray-900 bg-gray-900 text-gray-100 dark:bg-gray-900"
                : "border border-gray-900 dark:border-gray-500 dark:bg-gray-500"
            }`}
            data-html={true}
            data-tip={index !== 0 ? "Coming soon!" : ""}
            data-cy={title}
            // disabled={index !== 0}
          >
            {title}
          </button>
        );
      })}
      <ReactTooltip />
    </div>
  );
}
