enum APP_ROUTES {
  LOGIN = "/login",
  SIGN_UP = "/sign-up",
}

interface User {
  email: string;
  password: string;
  profileColor: string;
  createdAt: Date;
}

export { APP_ROUTES };
export { type User };
