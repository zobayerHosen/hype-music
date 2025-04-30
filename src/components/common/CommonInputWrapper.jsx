import { useState } from "react";
import { cn } from "../../lib/utils";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import ErrorText from "./ErrorText";

const CommonInputWrapper = ({
  wrapperClass,
  inputClass,
  labelClass,
  selectClass,
  textareaClass,
  label = "",
  type = "text",
  placeholder = "",
  register_as = "",
  register,
  name = "",
  options = [],
  errors = {},
  validationRules = {},
  readOnly = false,
  value = "",
  control,
  selectMode = "single",
  editForm = false,
}) => {
  const [show, setShow] = useState(false);
  const errorMessage = errors[register_as]?.message;

  return (
    <div
      className={cn(
        "w-full flex flex-col gap-2 justify-start items-start relative text-base text-white",
        wrapperClass
      )}
    >
      {/* label */}
      {label && (
        <label
          className={cn("capitalize font-medium", labelClass)}
          htmlFor={register_as}
        >
          {label}
        </label>
      )}

      {/* eye icon for passwprd */}
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShow((prevStatus) => !prevStatus)}
          className={`absolute cursor-pointer right-5 top-[50%] transform ${
            errorMessage ? "translate-y-[-46%]" : "translate-y-[50%]"
          }`}
        >
          {show ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}

      {/* textarea */}
      {type === "textarea" ? (
        <textarea
          id={register_as}
          placeholder={placeholder}
          name={name}
          defaultValue={value}
          className={cn(
            "w-full resize-none min-h-48  px-4 py-5 rounded-lg placeholder-[#5A5C5F] outline-none text-white border border-neutral-800 shadow-input bg-[rgba(255,255,255,0.05)]",
            textareaClass
          )}
          {...register(register_as, validationRules)}
        />
      ) : type === "select" ? (
        <></>
      ) : (
        <input
          type={type === "password" ? (show ? "text" : "password") : type}
          id={register_as}
          placeholder={placeholder}
          name={name}
          defaultValue={value}
          readOnly={readOnly}
          className={cn(
            "w-full px-4 sm:py-5 py-3  rounded-lg placeholder-[#5A5C5F] outline-none text-white shadow-input border border-neutral-800 bg-[rgba(255,255,255,0.05)] ",
            inputClass
          )}
          {...register(register_as, validationRules)}
        />
      )}
      {errorMessage && <ErrorText error={errorMessage} />}
    </div>
  );
};

export default CommonInputWrapper;
