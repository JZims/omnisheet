import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

//Runs on every component hydrate

export default authMiddleware({
    publicRoutes: ["/sign-in"],

    afterAuth(auth, req) {
        if (!auth.userId && !auth.isPublicRoute && req.url) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }
        
    },

})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)","/","/(api|trpc)(.*)"],
  };
  