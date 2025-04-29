import { cn } from "../../lib/utils";

const CommonBanner = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full xl:h-[700px] lg:h-[600px] md:h-[500px] sm:h-[350px] xs:h-[350px] 3xs:h-[300px] h-[250px] bg-[url('@/assets/images/contact_banner.png')] bg-center bg-cover bg-no-repeat flex flex-col relative gap-5 justify-center items-center",
        className
      )}
    >
      <div
        className="absolute w-full inset-0 pointer-events-none "
        style={{
          background:
            "linear-gradient(180deg, #000 6.81%, rgba(28, 27, 27, 0.00) 89.14%)",
        }}
      ></div>
      <div className="w-full z-30 h-full flex flex-col relative gap-5 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default CommonBanner;
