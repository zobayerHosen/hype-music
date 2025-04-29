import { Link } from "react-router-dom";

const CommonMusicCard = ({ musicInfo = {} }) => {
  const { id, cover, title, artist, genre } = musicInfo;
  const truncateWords = (text = "", maxWord = 4) => {
    const word = text.trim().split(" ");
    if (word.length <= maxWord) return text;
    return word.slice(0, maxWord).join(" ") + "...";
  };

  return (
    <div className="w-auto lg:min-h-[295px] h-[220px] relative group rounded-[10px] transition-all duration-300 ease-in-out text-white flex overflow-hidden">
      <img
        src={cover}
        alt={title}
        className="w-full group-hover:scale-125 transition-all duration-300 ease-in-out h-full object-cover"
      />
      <Link
        to={`/hype-music/music-details/${id}`}
        className="absolute w-full flex z-20 bottom-0 bg-black flex-col sm:p-5 p-3 gap-1 justify-center items-start"
      >
        <span className="absolute rounded-xl px-2 left-2.5 text-sm -top-3 z-40 bg-color">
          {genre}
        </span>
        <h2 className="lg:text-xl sm:text-lg text-base truncate cursor-pointer">
          Song: {truncateWords(title)}
        </h2>
        <h2 className="lg:text-lg sm:text-base text-sm truncate">
          Singer: {truncateWords(artist)}
        </h2>
      </Link>
    </div>
  );
};

export default CommonMusicCard;
