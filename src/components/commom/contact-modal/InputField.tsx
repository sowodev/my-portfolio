import React from "react";

type InputFieldProps = {
  label: string;
  dark: boolean;
  type: string;
  name: string;
  placeholder: string;
  setOnChange: React.Dispatch<React.SetStateAction<string>>;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  dark,
  type,
  name,
  placeholder,
  setOnChange,
}) => {
  return (
    <>
      <label
        className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
          dark && "text-slate-300"
        }`}
        htmlFor="username"
      >
        {label}
      </label>
      <input
        required
        className={
          dark
            ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
            : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
        }
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        pattern={
          name === "useremail"
            ? "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
            : "[^'\x22]+"
        }
        onChange={(e) => setOnChange(e.target.value)}
      />
    </>
  );
};

export default InputField;
