import CommonSubmitBtn from "../common/CommonSubmitBtn";

const HeroBanner = () => {
  return (
    <div className="w-full 2xl:h-[900px] xl:h-[700px] lg:h-[500px] sm:h-[400px] xs:h-[350px] 2xs:h-[270px] h-[220px] bg-[url('@/assets/images/music_home_banner.png')] bg-center bg-no-repeat flex justify-center items-center">
      <div className="w-[500px] 2xl:mt-[400px] lg:mt-[300px] sm:mt-[250px] mt-[200px] xs:flex hidden md:block sm:px-0 px-10 gap-5 justify-center items-center">
        <CommonSubmitBtn className={"rounded-lg bg-[#ED7340]"}>
          Register
        </CommonSubmitBtn>
        <CommonSubmitBtn
          className={"border border-[#ED7340] rounded-lg bg-transparent"}
        >
          Explore Music
        </CommonSubmitBtn>
      </div>
    </div>
  );
};

export default HeroBanner;
