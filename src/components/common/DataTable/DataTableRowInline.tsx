import { ExternalLinkIcon } from "@heroicons/react/outline";

export const DataTableRowInline
 = ({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: string;
}) => {
  return (
    <tr className="border-top-none">
      <td className="text-sm  text-[#0E1114] font-medium p-4 md:px-8 whitespace-nowrap">
        {label}
      </td>
      <td className="text-sm  text-[#0E1114] font-light p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2">
        <p>{value}</p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="h-4 w-4 cursor-pointer  text-[#979797]" />
          </a>
        ) : null}
      </td>
    </tr>
  );
};
