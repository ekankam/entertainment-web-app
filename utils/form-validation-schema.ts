import { z } from "zod";

const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is reqired" })
      .email({ message: "Must be a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    repeatPassword: z
      .string()
      .min(6, { message: "Repeat Password is required" }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ["repeatPassword"],
    message: "Password don't match",
  });

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is reqired" })
    .email({ message: "Must be a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type signUpValidationSchema = z.infer<typeof signUpSchema>;
type loginValidationSchema = z.infer<typeof loginSchema>;

export type { signUpValidationSchema, loginValidationSchema };
export { signUpSchema, loginSchema };
