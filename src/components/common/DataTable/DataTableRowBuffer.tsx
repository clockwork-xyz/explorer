import { useState } from "react";
import { CopyButton } from "../CopyButton";

export const DataTableRowBuffer = ({
  label,
  value,
  depth = 0,
}: {
  label: string;
  value: Buffer;
  depth?: number;
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      style={{ paddingLeft: depth * 16 }}
      className={`flex justify-between ${
        depth === 0 ? "border-b" : ""
      } border-[#E7EAED] dark:border-[#626262] text-[#979797]`}
    >
      <div className={`text-sm py-4 px-4 md:px-8 whitespace-nowrap`}>
        {label + " (Hex)"}
      </div>
      <div
        className={`py-4 px-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2`}
      >
        {value.length === 0 ? (
          <span className="text-sm">None</span>
        ) : (
          <>
            <CopyButton valueToCopy={value.toString("hex")} />
            <div className={`w-80 h-auto flex flex-col p-3 rounded-md bg-[#E7EAED] dark:bg-[#626262] font-['IBM_Plex_Mono']`}>

                {styleString(value).map((section, i) => {
                  return (
                    <p
                      key={`${i}_bytes`}
                      className={`text-sm text-[#0E1114] break-all dark:text-white font-light font-['IBM_Plex_Mono']`}
                    >
                      {section.join('')}
                    </p>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styleString = (buffer) => {
  const output = [];
  const hexString = buffer.toString("hex");
  for (let i = 0; i < hexString.length; i++) {
    const char = hexString[i];
    if (i % 2) {
      output.push(char);
      output.push(" ");
    } else {
      output.push(char);
    }
  }

  const display = [];

  for (let i = 0; i < output.length; i += 36) {
    display.push(output.slice(i, i + 36));
  }

  return display;
};
