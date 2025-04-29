import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ albumInfo = {} }) => {
  const { id, title, cover } = albumInfo;
  return (
    <Link
      to={`/hype-music/album-details/${id}`}
      className="w-full group cursor-pointer 2xl:h-96 lg:h-[350px] md:h-[280px] xs:h-[250px] 2xs:h-[200px] h-[220px] overflow-hidden relative rounded-[10px]"
    >
      <img
        src={cover}
        alt={title}
        className="w-full h-full group-hover:grayscale group-hover:scale-125 object-cover transition-all duration-300 ease-in-out"
      />
      <div className="absolute bottom-0 text-white xl:text-[26px] md:text-xl xs:text-lg text-sm truncate font-semibold w-full flex justify-start items-center md:p-5 p-3 xs:py-4 py-2 bg-black/50 z-10">
        {title}
      </div>
    </Link>
  );
};

export default AlbumCard;
