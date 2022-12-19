interface PaginationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  type: "prev" | "next";
}

export const PaginationButton = ({ type, ...props }: PaginationButtonProps) => {
  return (
    <button
      className="py-2 px-6 border border-[#0E1114] dark:border-[#E7EAED] dark:text-[#E7EAED] hover:bg-[#E7EAED] dark:hover:bg-[#393939] text-[#0E1114]  text-sm rounded-lg"
      {...props}
      data-cy="pagination-btn"
    >
      {type === "prev" ? "Prev" : "Next"}
    </button>
  );
};
