import { useRef, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonMusicCard from "./shared/CommonMusicCard";
import { musicData } from "@/data/db";
import { Autoplay, Navigation } from "swiper/modules";

const MusicYouMayLike = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full max-w-screen-2xl flex flex-col justify-start items-start gap-5">
      <div className="w-full flex justify-between gap-5 flex-wrap">
        <SectionTitle text="You May Like It" />
        {/* buttons */}
        <div className="flex primary-color gap-2 justify-start items-start">
          {/* previous */}
          <button
            className={`sm:w-10 w-8 sm:h-10 h-8 rounded-full cursor-pointer p-2 flex justify-center items-center ${
              activeIndex > 0 ? "border-2 border-primary-color" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft />
          </button>
          {/* next */}
          <button
            className={`sm:w-10 w-8 sm:h-10 h-8 rounded-full cursor-pointer p-2 flex justify-center items-center ${
              activeIndex < musicData.length - 4
                ? "border-2 border-primary-color"
                : ""
            }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            {" "}
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* slider */}
      <div className="w-full relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          navigation={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // mobile
            480: { slidesPerView: 2 }, // 2xs
            768: { slidesPerView: 2 }, // sm
            1024: { slidesPerView: 3 }, // md
            1280: { slidesPerView: 4 }, // xl
          }}
          className="w-full"
        >
          {/* slides */}
          {musicData.map((music) => {
            return (
              <SwiperSlide key={music.id}>
                <CommonMusicCard musicInfo={music} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MusicYouMayLike;
