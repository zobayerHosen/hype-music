import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import MusicLogo from "@/components/common/MusicLogo";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import CommonSubmitBtn from "@/components/common/CommonSubmitBtn";

const Sidebar = ({ className, setIsSidebarOpen, isSidebarOpen }) => {
  const { isAuthenticated } = useAuth();

  const navItems = [
    { label: "Home", href: "/hype-music" },
    { label: "Music", href: "/hype-music/musics" },
    { label: "The Hype Store", href: "/hype-store" },
  ];
  return (
    <div className={cn("", className)}>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-[300] bg-black/50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed z-[500] top-0 left-0 h-full w-64 bg-[#1F2730] text-white shadow-lg transition duration-300 ease-in-out  ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl:hidden`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
      >
        <div className="w-ful h-full relative flex flex-col gap-4 p-5">
          {/* header */}
          <div className="flex justify-between items-center">
            <MusicLogo
              className={"xl:w-40 lg:w-32 w-24 xl:h-[90px] lg:h-[70px] h-14"}
            />
            <button
              className="primary-color cursor-pointer text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              <RxCross2 className="text-4xl text-[-[#ED7340]" />
            </button>
          </div>
          {/* nav */}
          <nav className="w-full flex flex-col h-full overflow-y-auto header-scrollbar gap-4">
            {navItems.map((item, index) => {
              return (
                <NavLink
                  to={item.href}
                  key={index}
                  end={true}
                  className={({ isActive }) =>
                    `font-medium hover:primary-color transition-all duration-500 ease-in-out text-xl ${
                      isActive ? "primary-color" : "text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* signi/register */}
          <div className="w-full flex gap-4 sticky bottom-0">
            {isAuthenticated ? (
              <>
                <div>
                  <h1 className="text-white">image</h1>
                </div>
              </>
            ) : (
              <>
                <CommonSubmitBtn
                  link={true}
                  path="/hype-music/auth/signin"
                  className={
                    "w-36 rounded-lg border border-primary-color bg-transparent text-xl"
                  }
                >
                  Log In
                </CommonSubmitBtn>
                <CommonSubmitBtn
                  link={true}
                  path="/hype-music/auth/register"
                  className={"w-36 rounded-lg text-xl"}
                >
                  Register
                </CommonSubmitBtn>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
