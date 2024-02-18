import { NextResponse } from "next/server";
import {
  createUser,
  findUserByEmail,
  generateRandomColor,
  hashPassword,
} from "@/utils/actions";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const hashedPassword = await hashPassword(password);

  if (!email || !password) {
    return NextResponse.json(
      { message: "Missing credentials" },
      { status: 400 }
    );
  }

  try {
    const userExists = await findUserByEmail(email);

    if (userExists) {
      return NextResponse.json(
        { message: "User already exists!" },
        { status: 400 }
      );
    }
    const createdAt = new Date();
    const profileColor = generateRandomColor();
    const newUser = await createUser({
      email,
      password: hashedPassword,
      profileColor,
      createdAt,
    });

    return NextResponse.json(
      {
        user: newUser,
        message: "User created successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 }
    );
  }
}
