import { APP_ROUTES, Credentials } from "@/types";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prismaClient } from "./prisma-client";
import { findUserByEmail, verifyPassword } from "@/utils/actions";

export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as Credentials;

        if (!email || !password) {
          return null;
        }

        try {
          const user = await findUserByEmail(email);

          if (!user) {
            throw new Error("No User Found");
          }

          const passwordMatched = await verifyPassword(password, user.password);

          if (!passwordMatched) {
            throw new Error("Password doesnt Match");
          }

          return user;
        } catch (error) {
          throw new Error("Something went wrong. :(");
        }
      },
    }),
  ],
  pages: {
    signIn: APP_ROUTES.LOGIN,
  },
  session: {
    strategy: "jwt",
  },
};
