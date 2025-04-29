import { cn } from "@/lib/utils";
const BannerTitle = ({ text = "", className }) => {
  return (
    <h3
      className={cn(
        "font-fontania xl:text-[80px] lg:text-6xl xs:text-5xl text-4xl leading-normal xl:leading-[120px] text-center text-white tracking-[-1.6px] ",
        className
      )}
    >
      {text}
    </h3>
  );
};

export default BannerTitle;
