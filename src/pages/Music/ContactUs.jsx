import BannerTitle from "../../components/common/BannerTitle";
import CommonInputWrapper from "../../components/common/CommonInputWrapper";
import CommonSubmitBtn from "../../components/common/CommonSubmitBtn";
import CommonWrapper from "../../components/common/CommonWrapper";
import DashboardTitle from "../../components/common/DashboardTitle";
import CommonBanner from "../../components/music/CommonBanner";

const ContactUs = () => {
  return (
    <div className="w-full">
      {/* banner */}
      <CommonBanner
        className={`xl:h-[700px] bg-[url('@/assets/images/contact_banner.png')]`}
      >
        <BannerTitle text="Hits Us Up!" />
        <div className="sm:w-[500px] w-full sm:px-0 px-10 flex 2xs:flex-row gap-5 justify-center items-center">
          <CommonSubmitBtn className={"rounded-lg"}>Register</CommonSubmitBtn>
          <CommonSubmitBtn
            className={"border primary-color rounded-lg bg-transparent"}
          >
            Explore Music
          </CommonSubmitBtn>
        </div>
      </CommonBanner>

      <CommonWrapper className={`bg-[#1F2730]`}>
        <div className="container mx-auto flex flex-col justify-start items-center xl:gap-16 lg:gap-10 sm:gap-8 gap-5">
          {/* title */}
          <DashboardTitle text="Contact Us" />
          {/* form */}
          <form className="w-full border  backdrop-blur-[64px] rounded-[10px] bg-[rgba(0,0,0,0.55)] 2xl:py-20 lg:py-16 md:py-12 sm:py-10 py-6 2xl:px-28 xl:px-20 lg:px-16 px-4 flex flex-col xl:gap-10 xs:gap-5 gap-3 justify-start items-start">
            {/* Name */}
            <CommonInputWrapper
              wrapperClass={``}
              inputClass={``}
              selectClass={``}
              textareaClass={``}
              label="Name"
              name="name"
              type="text"
              placeholder="Your Name"
              // register={register}
              // errors={errors}
              register_as="name"
              validationRules={{
                required: "Name is required",
              }}
            />
          </form>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default ContactUs;
