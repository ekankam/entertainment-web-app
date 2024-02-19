import type { NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./utils/form-validation-schema";
import { findUserByEmail, verifyPassword } from "./utils/actions";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await findUserByEmail(email);
          if (!user || !user?.password) {
            return null;
          }

          const passwordMatched = await verifyPassword(password, user.password);

          if (passwordMatched) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
