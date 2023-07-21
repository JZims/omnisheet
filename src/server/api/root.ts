
import { createTRPCRouter } from "~/server/api/trpc";
import { sheetsRouter } from "./routers/sheets";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  sheets: sheetsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
