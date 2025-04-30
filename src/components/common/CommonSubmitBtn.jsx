import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import Loader from "./Loader";

const CommonSubmitBtn = ({
  children,
  className,
  type = "submit",
  link = false,
  path = "",
  isLoading = false,
  onClick,
}) => {
  return (
    <>
      {link ? (
        <Link
          to={path}
          onClick={onClick}
          className={cn(
            "w-full rounded-[10px], cursor-pointer text-white sm:text-xl text-base font-medium text-center sm:p-3 p-2  flex justify-center items-center bg-[#EC8156]",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={cn(
            "w-full rounded-[10px] text-white font-medium cursor-pointer text-center sm:p-3 p-2 bg-color flex justify-center items-center",
            className
          )}
        >
          {isLoading ? <Loader size={28} color="white" speed={1} /> : children}
        </button>
      )}
    </>
  );
};

export default CommonSubmitBtn;
