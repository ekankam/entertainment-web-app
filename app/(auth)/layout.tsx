import React from "react";
import Image from "next/image";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen w-full bg-brand-dark-blue flex flex-col items-center max-w-screen-2xl mx-auto text-white">
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={32}
        height={32}
        className="my-14"
      />
      {children}
    </div>
  );
}

export default AuthLayout;
