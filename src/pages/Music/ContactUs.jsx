import { useForm } from "react-hook-form";
import BannerTitle from "../../components/common/BannerTitle";
import CommonInputWrapper from "../../components/common/CommonInputWrapper";
import CommonSubmitBtn from "../../components/common/CommonSubmitBtn";
import CommonWrapper from "../../components/common/CommonWrapper";
import DashboardTitle from "../../components/common/DashboardTitle";
import CommonBanner from "../../components/music/CommonBanner";
import Albums from "../../components/music/Albums";

const ContactUs = () => {
  const {
    register,
    // reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full border  backdrop-blur-[64px] rounded-[10px] bg-[rgba(0,0,0,0.55)] 2xl:py-20 lg:py-16 md:py-12 sm:py-10 py-6 2xl:px-28 xl:px-20 lg:px-16 px-4 flex flex-col xl:gap-10 xs:gap-5 gap-3 justify-start items-start"
          >
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
              register={register}
              errors={errors}
              register_as="name"
              validationRules={{
                required: "Name is required",
              }}
            />
            {/* email */}
            <CommonInputWrapper
              label="Email"
              name="email"
              type="email"
              placeholder="Your Email"
              register={register}
              errors={errors}
              register_as="email"
              validationRules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              }}
            />

            {/* subject */}
            <CommonInputWrapper
              label="Subject"
              name="subject"
              placeholder="Your Subject"
              type="text"
              register={register}
              errors={errors}
              register_as="subject"
              validationRules={{
                required: "Subject is required",
              }}
            />

            {/* textarea */}
            <CommonInputWrapper
              label="Message"
              name="message"
              type="textarea"
              placeholder="Your message"
              register={register}
              errors={errors}
              register_as="message"
              validationRules={{
                required: "Message is required",
              }}
            />
            {/* button */}
            <CommonSubmitBtn className={"sm:min-h-[64px] sm:py-0 py-3"}>
              Sent Message
            </CommonSubmitBtn>
          </form>
          {/* albums */}
          <Albums />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default ContactUs;
