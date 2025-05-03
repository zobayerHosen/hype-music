import { cn } from "../../lib/utils";

const CommonFormWrapper = ({ children, className }) => {
  return (
    <div
      className={cn(
        `xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-[550px] w-full sm:px-10 xs:px-5 px-4 lg:py-20 md:py-16 sm:py-12 xs:py-10 py-8 backdrop-blur-[70px] rounded-[10px] bg-[rgba(0,0,0,0.55)]`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default CommonFormWrapper;
