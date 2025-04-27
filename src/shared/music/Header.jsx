import { NavLink } from "react-router-dom";
import MusicLogo from "../../components/common/MusicLogo";
import { cn } from "@/lib/utils";
import CommonSubmitBtn from "../../components/common/CommonSubmitBtn";
import CartPopup from "../../components/music/shared/CartPopup";
import { useAuth } from "../../hooks/useAuth";
import { IoMenu } from "react-icons/io5";

const Header = ({ handleSideBarOpen, className }) => {
  const { isAuthenticate } = useAuth();

  const navItems = [
    { label: "Home", href: "/hype-music" },
    { label: "Music", href: "/hype-music/musics" },
    { label: "Ther Hype Store", href: "/hype-store" },
  ];
  return (
    <>
      <header
        className={cn(
          "w-full z-[300] sticky top-0 py-2 bg-[#1F2730] ",
          className
        )}
      >
        <div className="container mx-auto flex justify-between items-center gap-4">
          <MusicLogo
            className={"xl:w-40 lg:w-32 w-24 xl:h-[90px] lg:h-[70px] h-14"}
          />
          {/* navs */}
          <nav className="hidden xl:flex xl:gap-10 gap-6 justify-center items-center">
            {navItems.map((navItem, index) => {
              return (
                <NavLink
                  to={navItem.href}
                  key={index}
                  end={true}
                  className={({ isActive }) =>
                    `font-medium hover:text-[#ED7340] transition-all duration-500 ease-in-out text-xl ${
                      isActive ? "text-[#ED7340]" : "text-white"
                    }`
                  }
                >
                  {navItem.label}
                </NavLink>
              );
            })}
          </nav>

          {/* register/login/cart/contact */}
          <div className="flex xl:gap-6 gap-6 justify-end items-center">
            <CommonSubmitBtn
              link={true}
              path="/hype-music/contact-us"
              className={
                "min-w-28 h-[44] text-base hidden xl:flex rounded-[20px] border-[#ED7340] text-white"
              }
            >
              Contact Us
            </CommonSubmitBtn>
            <CartPopup />

            {isAuthenticate ? (
              <>
                <span>image</span>
              </>
            ) : (
              <>
                <CommonSubmitBtn
                  link={true}
                  path="/hype-music/auth/signin"
                  className={
                    "min-w-36 xl:flex hidden rounded-lg border border-[#ED7340] bg-transparent"
                  }
                >
                  Log In
                </CommonSubmitBtn>
                <CommonSubmitBtn
                  link={true}
                  path="/hype-music/auth/register"
                  className={"min-w-36 xl:flex hidden rounded-lg"}
                >
                  Register
                </CommonSubmitBtn>
              </>
            )}

            {/* sidebar toggle button */}
            <div className="xl:hidden w-full cursor-pointer flex justify-between items-center">
              <button
                onClick={handleSideBarOpen}
                className="text-white cursor-pointer text-2xl"
              >
                <IoMenu className="text-4xl text-[#ED7340]" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
