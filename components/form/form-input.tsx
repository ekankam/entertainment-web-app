import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const FormInput: React.FC<InputProps> = ({
  isError = false,
  type,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center border-b border-b-brand-grayish-blue w-full focus-within:border-b-brand-white h-10 my-5",
        {
          "border-b-brand-red": isError,
        }
      )}
    >
      <input
        {...props}
        type={type}
        className="bg-transparent h-full px-3 py-3 text-body-md w-full  outline-none placeholder:text-white/30 text-brand-white"
      />
      {isError && (
        <p className="text-brand-red text-xs flex-shrink-0 h-full flex items-center">
          Can&apos;t be empty
        </p>
      )}
    </div>
  );
};

export default FormInput;
