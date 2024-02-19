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
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

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

  const onSubmit: SubmitHandler<loginValidationSchema> = async (data) => {
    const validatedFields = loginSchema.safeParse(data);

    if (!validatedFields.success) {
      return { errors: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;

    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid credentials" };
          default:
            return { error: "Something went wrong!" };
        }
      }

      throw error;
    }
  };

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
