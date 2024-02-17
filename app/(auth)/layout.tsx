import React from "react";
import Image from "next/image";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="min-h-screen w-full bg-brand-dark-blue flex flex-col items-center mx-auto text-white">
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={32}
        height={32}
        className="my-14"
      />
      {children}
    </section>
  );
}

export default AuthLayout;
