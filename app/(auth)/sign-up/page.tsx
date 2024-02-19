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
import { useCreateUserMutation } from "@/hooks/api";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/ui/loading-spinner";

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

  const { mutate, isPending, isSuccess } = useCreateUserMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<signUpValidationSchema> = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  if (isSuccess) {
    router.push(APP_ROUTES.HOME);
  }

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
          disabled={isPending}
        >
          {isPending && <LoadingSpinner />}
          {isPending ? "Creating your account..." : "Create an account"}
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
