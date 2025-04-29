import { cn } from "../../lib/utils";

const DashboardTitle = ({ text = "", className }) => {
  return (
    <h1
      className={cn(
        "xl:text-4xl md:text-3xl xs:text-2xl text-xl font-semibold text-white",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default DashboardTitle;
