"use client";

import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/form/form-input";
import FormWrapper from "@/components/form/form-wrapper";
import Header from "@/components/form/header";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/types";
import {
  loginSchema,
  loginValidationSchema,
} from "@/utils/form-validation-schema";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginValidationSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<loginValidationSchema> = (data) =>
    console.log(data);

  return (
    <FormWrapper>
      <Header header="Login" />
      <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Email address"
          {...register("email")}
          isError={errors.email?.message ? true : false}
          validationMessage={errors.email?.message}
        />
        <FormInput
          type="password"
          placeholder="Password"
          {...register("password")}
          isError={errors.password?.message ? true : false}
          validationMessage={errors.password?.message}
        />
        <Button
          className="bg-brand-red text-brand-white hover:bg-brand-white hover:text-brand-semi-dark-blue mt-5 mb-4 w-full h-12"
          type="submit"
        >
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
