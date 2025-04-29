import React from "react";

const ArtisCards = ({ artistInfo = {} }) => {
  const { id, name, image } = artistInfo;
  return (
    <div className="w-full 2xl:h-[400px] lg:h-[350px] md:h-[280px] sm:h-[330px] xs:h-[250px] h-[350px] flex justify-center items-center group relative ">
      <div className="w-full cursor-pointer p-3 transition-all duration-500 ease-in-out group-hover:bg-[#ed7340] bg-transparent h-full overflow-hidden clip-hexagon">
        <img
          src={image}
          alt={name}
          className="w-full clip-hexagon group-hover:grayscale transition-all duration-500 ease-in-out  h-full object-cover "
        />
      </div>
      <h2 className="text-white absolute bottom-12 italic text-xl font-extrabold ">
        {name}
      </h2>
    </div>
  );
};

export default ArtisCards;
