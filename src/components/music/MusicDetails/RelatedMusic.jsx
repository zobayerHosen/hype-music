import SectionTitle from "@/components/common/SectionTitle";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { musicData } from "@/data/db";
import CommonMusicCard from "../shared/CommonMusicCard";

const RelatedMusic = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 ">
      <div className="w-full  flex justify-between gap-5 flex-wrap ">
        <SectionTitle text="Music" />
        {/* buttons */}
        <div className="flex primary-color gap-2 justify-start items-start ">
          {/* prev */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`sm:w-10 w-8 sm:h-10 h-8 rounded-full cursor-pointer p-2 flex justify-center items-center  ${
              activeIndex > 0 ? "border primary-color" : ""
            }`}
          >
            <FaArrowLeft />
          </button>
          {/* next */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`sm:w-10 w-8 sm:h-10 h-8 rounded-full p-2 cursor-pointer flex justify-center items-center  ${
              activeIndex < musicData.length - 4 ? "border primary-color" : ""
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* slider */}
      <div className="w-full relative">
        <Swiper
          navigation={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000, // 3 seconds
            disableOnInteraction: false,
          }}
          breakpoints={{
            1280: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={20}
          className="w-full"
        >
          {/* slides */}
          {musicData.map((music) => {
            return (
              <SwiperSlide className="w-full" key={music.id}>
                <CommonMusicCard musicInfo={music} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedMusic;
