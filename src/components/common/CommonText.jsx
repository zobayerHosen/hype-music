import { cn } from "../../lib/utils";

const CommonText = ({ text = "", className }) => {
  return (
    <h3
      className={cn(
        "xl:text-2xl 2xs:text-xl text-base font-medium text-white",
        className
      )}
    >
      {text}
    </h3>
  );
};

export default CommonText;
