import * as bcrypt from "bcryptjs";
import { prismaClient } from "@/lib/prisma-client";
import { API_ENDPOINTS, Credentials, User } from "@/types";
import axiosInstance from "@/lib/axios";

const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const verifyPassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};

const findUserByEmail = async (email: string) => {
  const user = await prismaClient.user.findUnique({ where: { email } });
  return user;
};

const createUser = async (user: User) => {
  const newUser = await prismaClient.user.create({
    data: user,
  });
  return newUser;
};

const generateRandomColor = (): string => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `#${((red << 16) | (green << 8) | blue)
    .toString(16)
    .padStart(6, "0")}`;
};

const addUser = async (credentials: Credentials) => {
  const { data } = await axiosInstance.post(API_ENDPOINTS.SIGN_UP, credentials);
  return data;
};

export {
  hashPassword,
  verifyPassword,
  findUserByEmail,
  createUser,
  generateRandomColor,
  addUser,
};
