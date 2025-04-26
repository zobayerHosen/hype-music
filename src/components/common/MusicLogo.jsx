import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import music_logo from "@/assets/images/music_logo.png";

const MusicLogo = ({ to = "/hype-music", className }) => {
  return (
    <Link className={cn("shrink-0 overflow-hidden", className)} to={to}>
      <img
        className="w-full h-full object-contain"
        src={music_logo}
        alt="Music Logo"
      />
    </Link>
  );
};

export default MusicLogo;
