import NextAuth from "next-auth";
import { authconfig } from "@/lib/auth.config";

export default NextAuth(authconfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
