import React from "react";

function FormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[400px] w-full h-full rounded-[20px] bg-brand-semi-dark-blue p-10">
      {children}
    </div>
  );
}

export default FormWrapper;
