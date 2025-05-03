import { cn } from "../../lib/utils";

const CommonAuthTitle = ({ text = "", className }) => {
  return (
    <h2
      className={cn(
        "sm:text-3xl 3xs:text-2xl text-xl text-center font-semibold text-white",
        className
      )}
    >
      {text}
    </h2>
  );
};

export default CommonAuthTitle;
