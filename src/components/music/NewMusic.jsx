import { musicData } from "@/data/db";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewMusic = () => {
  const chunkArray = (array, chunkSize) => {
    return array.reduce((result, item, index) => {
      if (index % chunkSize === 0) result.push([]);
      result[result.length - 1].push(item);
      return result;
    }, []);
  };
  const musicRows = chunkArray(musicData, 2);
  // console.log(musicRows);

  return (
    <div className="w-full flex flex-col justify-start items-center lg:gap-10 gap-5">
      {/* music section title */}
      <div className="w-full flex flex-col text-white justify-start items-center">
        <h1 className="xl:text-4xl sm:text-3xl text-2xl font-semibold">
          New Music
        </h1>
        <p className="sm:text-lg text-base">New music which upload today</p>
      </div>
      {/* New Music List - Rows of Two */}
      <div className="w-full flex flex-col xs:gap-5 2xs:gap-3 gap-5">
        {musicRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="w-full flex flex-col xl:flex-row 2xs:flex-row xs:gap-5 2xs:gap-3 gap-5 items-stretch"
          >
            {row.map((music) => (
              <div
                key={music.id}
                className="group flex-1 xl:h-[460px] lg:h-[300px] md:h-[250px] sm:h-[200px] xs:h-[150px] 2xs:h-[120px] min-h-[200px] 2xs:max-h-[460px] max-h-[200px] rounded-2xl overflow-hidden relative transition-all duration-300 ease-in-out hover:flex-[1.3]"
              >
                <img
                  src={music.cover}
                  alt={music.title}
                  className="w-full h-full object-cover transition-transform duration-300 "
                />
                <div className="absolute bottom-0 text-white w-full flex justify-between items-center lg:px-10 sm:px-4 2xs:px-2 px-5 sm:py-4 2xs:py-2 py-4 bg-black/50 z-10">
                  <div className="w-full flex flex-col justify-center items-start">
                    <h3 className="lg:text-2xl sm:text-xl truncate xs:text-base text-sm font-semibold">
                      {music.title}
                    </h3>
                    <p className="md:text-base xs:text-sm text-xs">
                      {music.artist}
                    </p>
                  </div>
                  <Link
                    to={`/hype-music/music-details/${music.id}`}
                    className="lg:w-14 sm:w-10 xs:w-8 w-6  lg:h-14 sm:h-10 xs:h-8 h-6 bg-primary  shrink-0 flex justify-center items-center rounded-full"
                  >
                    <FaArrowRight className="lg:text-2xl xs:text-xl text-base group-hover:-rotate-45 transition-all duration-500 ease-in-out" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMusic;
