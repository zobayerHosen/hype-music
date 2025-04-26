import { cn } from "../../lib/utils";

const CommonWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full 2xl:py-[100px] xl:py-20 md:py-16 sm:py-12 xs:py-8 py-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CommonWrapper;
