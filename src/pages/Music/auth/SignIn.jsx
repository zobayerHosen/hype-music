import React from "react";
import CommonAuthWrapper from "@/components/common/CommonAuthWrapper";
import CommonFormWrapper from "@/components/common/CommonFormWrapper";
import CommonAuthTitle from "@/components/common/CommonAuthTitle";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "../../../components/common/CommonInputWrapper";
import { Link } from "react-router-dom";
import CommonSubmitBtn from "../../../components/common/CommonSubmitBtn";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <CommonAuthWrapper>
      <CommonFormWrapper>
        <div className="w-full flex flex-col sm:gap-9 gap-5 justify-start text-white items-center">
          <CommonAuthTitle text="Login" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full font-medium flex flex-col justify-start items-center xs:gap-6 gap-5"
          >
            {/* Email */}
            <CommonInputWrapper
              wrapperClass="2xs:text-base text-sm"
              inputClass={`border-none`}
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
            {/* Password */}
            <CommonInputWrapper
              wrapperClass="2xs:text-base text-sm"
              inputClass={`border-none`}
              label="Password"
              name="password"
              type="password"
              placeholder="......."
              register={register}
              errors={errors}
              register_as="password"
              validationRules={{
                required: "Password is required",
              }}
            />
            <div className="w-full flex justify-between items-center 2xs:text-base text-sm">
              {/* terms */}
              <label
                htmlFor="remember_me"
                className="flex cursor-pointer justify-start items-center gap-3"
              >
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="accent-white/50 xs:w-5 w-4 xs:h-5 h-4"
                />
                <span>Remember me</span>
              </label>
              <Link
                to={"/hype-music/auth/forgot-password"}
                className="underline"
              >
                Forgot Password
              </Link>
            </div>
            <CommonSubmitBtn
              // isLoading={signInMutation.isPending}
              className={`sm:min-h-[60px] sm:py-0 py-3 rounded-[8px] 2xs:text-base text-sm`}
            >
              Log In
            </CommonSubmitBtn>
            <div className="2xs:text-base text-sm">
              Don’t have a account,{" "}
              <Link className="underline" to="/hype-music/auth/register">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </CommonFormWrapper>
    </CommonAuthWrapper>
  );
};

export default SignIn;
