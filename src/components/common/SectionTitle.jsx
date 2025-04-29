import { cn } from "@/lib/utils";
const SectionTitle = ({ text = "", className }) => {
  return (
    <h3
      className={cn(
        "md:text-3xl xs:text-2xl text-xl font-semibold text-white",
        className
      )}
    >
      {text}
    </h3>
  );
};

export default SectionTitle;
