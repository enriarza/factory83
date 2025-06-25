const animation = "animate-fade animate-once animate-duration-2000";

const Tooltip = ({
  children,
  errorClass,
}: {
  children: React.ReactNode;
  errorClass: string;
}) => (
  <div
    id="Tooltip"
    className={`${animation} ${errorClass} -mb-2.5 error tooltiptext w-48 bg-black text-white text-center rounded-md py-1 relative z-10 left-2/4 -ml-24 after:absolute after:bottom-full after:left-2/4 after:-ml-1 after:border-4 after:border-solid after:border-x-transparent after:border-t-transparent after:border-b-black after:z-10 dark:bg-[#a18e37] dark:text-[#000] dark:after:border-b-[#a18e37]`}
  >
    {children}
  </div>
);

export default Tooltip;
