import { useParams } from "react-router-dom";
import music_5 from "@/assets/images/music_5.png";
import { useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import MusicInfo from "@/components/music/MusicDetails/MusicInfo";
import RelatedMusic from "../../components/music/MusicDetails/RelatedMusic";

const MusicDetails = () => {
  const { id } = useParams();
  const [showPlayer, setShowPlayer] = useState(false);

  console.log(id);
  return (
    <div className="relative 2xl:pt-[100px] xl:pt-20 md:pt-16 sm:pt-12 xs:pt-8 pt-6 pb-0 w-full">
      <div className="container mx-auto flex flex-col justify-start items-start xl:gap-14 sm:gap-10 gap-6 lg:pb-10 sm:pb-6 pb-3">
        <div className="w-full flex lg:flex-row flex-col xl:gap-14 lg:gap-5 sm:gap-10 gap-8 justify-between items-start">
          {/* image preview */}
          <div className="2xl:w-[1050px] w-full relative flex justify-center items-center xl:h-[550px] sm:h-[480px] xs:h-[400px] 2xs:h-[300px] h-[250px] rounded-xl overflow-hidden">
            <img src={music_5} alt="" className="w-full h-full object-cover" />
            {!showPlayer && (
              <button
                type="button"
                onClick={() => setShowPlayer(true)}
                className="absolute cursor-pointer z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xs:w-[80px] w-16 2xs:h-[80px] h-16 rounded-full flex items-center justify-center group"
              >
                <span className="absolute 2xs:w-[80px] w-16 2xs:h-[80px] h-16 bg-color rounded-full animate-ping z-0"></span>
                <span className="absolute 2xs:w-[80px] w-16 2xs:h-[80px] h-16 bg-color rounded-full z-10 transition-colors duration-200"></span>
                <IoPlaySharp className="text-white z-20" size={34} />
              </button>
            )}
          </div>
          {/* others Infos */}
          <MusicInfo />
        </div>
        <RelatedMusic />
      </div>
    </div>
  );
};

export default MusicDetails;
