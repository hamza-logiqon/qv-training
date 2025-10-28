// src/lib/routes.js

//  Auth routes
export const AUTH_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  Verify_OTP: "/verify-otp",
  FORGOT_PASSWORD: "/forgot-password",
  Reset_PASSWORD: "/reset-password",
};

//  App (protected) routes
export const APP_ROUTES = {
  DASHBOARD: "/dashboard",
  WORKOUTS: "/workouts",
  NUTRITION: "/nutrition",
  PROGRESS: "/progress",
  PROFILE: "/profile",
  SETTINGS: "/settings",
};

//  Public routes
export const PUBLIC_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRICING: "/pricing",
};

//  Combined export
export const ROUTES = {
  ...AUTH_ROUTES,
  ...APP_ROUTES,
  ...PUBLIC_ROUTES,
};

export default ROUTES;
