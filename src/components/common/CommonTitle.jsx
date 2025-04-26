import { cn } from "../../lib/utils";

const CommonTitle = ({ text = "", className }) => {
  return (
    <h3
      className={cn(
        "2xl:text-6xl xl:text-5xl lg:text-4xl 2xs:text-2xl text-xl truncate text-center font-medium text-white",
        className
      )}
    >
      {text}
    </h3>
  );
};

export default CommonTitle;
