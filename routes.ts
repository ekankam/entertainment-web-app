import { APP_ROUTES } from "./types";

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type { string []}
 */
export const authRoutes: string[] = ["/login", "/sign-up"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purpose
 * @type { string }
 */
export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/home";
