import { authMiddleware } from "@clerk/nextjs";

//Runs on every component hydrate

export default authMiddleware({
    publicRoutes: ["/sign-in", "/"],

})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)","/","/(api|trpc)(.*)"],
  };
  