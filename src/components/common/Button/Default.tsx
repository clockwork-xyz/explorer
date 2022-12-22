export const DefaultButton = ({ className = "", ...rest }) => {
  return (
    <button
      className={`bg-black-100 dark:bg-white text-sm dark:text-black-100 text-white align-middle justify-center py-3 px-10 ${className}`}
      {...rest}
    />
  );
};
