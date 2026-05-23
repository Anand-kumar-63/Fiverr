export const authCookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: false,
  maxAge: 60 * 60 * 1000,
};
