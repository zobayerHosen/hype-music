import MusicLogo from "../../components/common/MusicLogo";
import { cn } from "@/lib/utils";

const Header = ({ className }) => {
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
        </div>
      </header>
    </>
  );
};

export default Header;
