import React from "react";
import HeroBanner from "@/components/music/HeroBanner";
import CommonWrapper from "@/components/common/CommonWrapper";
import NewMusic from "@/components/music/NewMusic";
import TrendingMusic from "@/components/music/TrendingMusic";
import MusicYouMayLike from "../../components/music/MusicYouMayLike";
import TopArtis from "../../components/music/TopArtis";
import Albums from "../../components/music/Albums";
import Sponsor from "../../components/music/Sponsor";

const MusicHome = () => {
  return (
    <div className="w-ful px-3 md:px-0">
      <HeroBanner />
      <CommonWrapper className="bg-[#1F2730]">
        <div className="container mx-auto flex flex-col justify-start items-center 2xl:gap-24 xl:gap-20 md:gap-16 sm:gap-12 xs:gap-8 gap-5">
          {/* search */}
          <div className="w-full text-white md:h-[75px] sm:h-16 h-14 rounded-[10px]  shadow-input flex bg-[rgba(255,255,255,0.06)]">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full text-white xs:text-base text-sm px-10 border-none outline-none"
            />
            <div className="xs:w-48 2xs:w-32 md:w-52 w-28 shrink-0 h-full flex justify-center items-center bg-[#EE713D] rounded-tr-[10px] rounded-br-[10px] sm:text-2xl xs:text-xl text-base font-semibold cursor-pointer">
              Search
            </div>
          </div>
          {/* new music */}
          <NewMusic />
          {/* trending music */}
          <TrendingMusic />
          {/* music you may like */}
          <MusicYouMayLike />
          {/* top artist */}
          <TopArtis />
          {/* albums */}
          <Albums />
          {/* sponsor */}
          <Sponsor />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default MusicHome;
