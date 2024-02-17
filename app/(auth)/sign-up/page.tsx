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
  signUpSchema,
  signUpValidationSchema,
} from "@/utils/form-validation-schema";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpValidationSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit: SubmitHandler<signUpValidationSchema> = (data) =>
    console.log(data);

  return (
    <FormWrapper>
      <Header header="Sign Up" />
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
        <FormInput
          type="password"
          placeholder="Repeat password"
          {...register("repeatPassword")}
          isError={errors.repeatPassword?.message ? true : false}
          validationMessage={errors.repeatPassword?.message}
        />
        <Button
          className="bg-brand-red text-brand-white hover:bg-brand-white hover:text-brand-semi-dark-blue mt-5 mb-4 w-full h-12"
          type="submit"
        >
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
