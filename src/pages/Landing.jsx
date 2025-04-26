// import landingImage from "../assets/images/landing_group_bg.png";
import { motion } from "framer-motion";
import MusicLogo from "../components/common/MusicLogo";
import CommonTitle from "../components/common/CommonTitle";
import CommonText from "../components/common/CommonText";
import CommonSubmitBtn from "../components/common/CommonSubmitBtn";
const Landing = () => {
  return (
    <div className="w-full overflow-x-hidden flex justify-center items-center md:items-start  min-h-screen overflow-y-auto scroll-hidden bg-cover bg-center bg-no-repeat bg-[url('@/assets/images/landing_group_bg.png')] relative">
      {/* contents */}
      <div className="w-full h-full relative z-[50] flex md:flex-row flex-col md:gap-4 sm:gap-20 2xs:gap-16 gap-12">
        {/* Left Side with Clip-Path */}
        <motion.div
          initial={{
            x: -500,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="md:w-[45%] w-full px-3 flex flex-col gap-2 md:gap-5 md:justify-start justify-center items-center h-full md:pt-24"
        >
          <MusicLogo
            className={"xl:w-40 lg:w-32 w-24 xl:h-[90px] lg:h-[70px] h-14"}
          />
          <CommonTitle text="Buy And Sell Music Here" />
          <CommonText text="Search For Your Favorite Artist" />
          <CommonSubmitBtn
            className="md:max-w-[260px] max-w-[200px] md:py-5 py-2 rounded-lg"
            path="/hype-music"
            link={true}
          >
            Go Music Hype
          </CommonSubmitBtn>
        </motion.div>
        {/* Right Side with Clip-Path */}
        <motion.div
          initial={{
            x: 500,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="md:w-[55%] w-full lg:mt-72 md:mt-48 px-3 h-full flex flex-col md:justify-center items-center gap-2 md:gap-5"
        >
          {/* <StoreLogo
            className={"xl:w-40 lg:w-32 w-24 xl:h-[90px] lg:h-[70px] h-14"}
          /> */}
          <CommonTitle text="Buy And Sell Merchandise Here" />
          <CommonText text="Search For The Hottest Brands" />
          <CommonSubmitBtn
            className={"md:max-w-[260px] max-w-[200px] md:py-5 py-2 rounded-lg"}
            link={true}
            path="/hype-store"
          >
            Go Hype Store
          </CommonSubmitBtn>
        </motion.div>
      </div>
      {/* shades  */}
      <div className=" absolute w-full h-full inset-0 pointer-events-none bg-black/50"></div>
    </div>
  );
};

export default Landing;
