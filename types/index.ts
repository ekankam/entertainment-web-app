enum APP_ROUTES {
  LOGIN = "/login",
  SIGN_UP = "/sign-up",
  HOME = "/home",
}

enum API_ENDPOINTS {
  SIGN_UP = "/auth/sign-up",
}

interface User {
  email: string;
  password: string;
  profileColor: string;
  createdAt: Date;
}

interface Credentials {
  email: string | undefined;
  password: string | undefined;
}

export { APP_ROUTES, API_ENDPOINTS };
export { type User, type Credentials };
