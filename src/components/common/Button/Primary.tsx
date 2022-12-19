export const PrimaryButton = (props) => {
  const { className, ...rest } = props;
  return (
    <button
      className={`bg-[#0E1114] dark:bg-white text-sm dark:text-[#0E1114] text-white align-middle justify-center pt-3 pb-3 pr-10 pl-10 ${
        className ? className : ""
      }`}
      {...rest}
    />
  );
};
