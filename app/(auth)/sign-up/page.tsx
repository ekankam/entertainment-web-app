import FormInput from "@/components/form/form-input";
import FormWrapper from "@/components/form/form-wrapper";
import Header from "@/components/form/header";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/types";
import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <FormWrapper>
      <Header header="Sign Up" />
      <form className="h-full">
        <FormInput type="email" placeholder="Email address" />
        <FormInput type="password" placeholder="Password" />
        <FormInput type="password" placeholder="Repeat password" />
        <Button className="bg-brand-red text-brand-white hover:bg-brand-white hover:text-brand-semi-dark-blue mt-5 mb-4 w-full h-12">
          Create an account
        </Button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href={APP_ROUTES.LOGIN} className="text-brand-red ml-1">
            Login
          </Link>
        </p>
      </form>
    </FormWrapper>
  );
}

export default SignUp;
