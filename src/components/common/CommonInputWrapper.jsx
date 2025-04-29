import { cn } from "../../lib/utils";

const CommonInputWrapper = ({ wrapperClass }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-2 justify-start items-start relative text-base text-white",
        wrapperClass
      )}
    ></div>
  );
};

export default CommonInputWrapper;
