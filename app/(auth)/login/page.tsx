import FormInput from "@/components/form/form-input";
import FormWrapper from "@/components/form/form-wrapper";
import Header from "@/components/form/header";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/types";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <FormWrapper>
      <Header header="Login" />
      <form className="h-full">
        <FormInput type="email" placeholder="Email address" />
        <FormInput type="password" placeholder="Password" />
        <Button className="bg-brand-red text-brand-white hover:bg-brand-white hover:text-brand-semi-dark-blue mt-5 mb-4 w-full h-12">
          Login to your account
        </Button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href={APP_ROUTES.SIGN_UP} className="text-brand-red ml-1">
            Sign Up
          </Link>
        </p>
      </form>
    </FormWrapper>
  );
}

export default Login;
