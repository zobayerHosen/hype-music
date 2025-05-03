import React from "react";
import { cn } from "../../lib/utils";

const CommonAuthWrapper = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full py-7 xs:px-5 px-4 min-h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat bg-[url('@/assets/images/auth_bg_music.png')]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CommonAuthWrapper;
