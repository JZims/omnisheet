
// import { createTRPCRouter, privateProcedure, publicProcedure } from "npm/server/api/trpc";
// import { clerkClient } from "@clerk/nextjs";
// import { filterUserForClient } from "npm/server/helpers/filterUserForClient";
// import { TRPCError } from "@trpc/server";
// import { z } from "zod";


// export const postsRouter = createTRPCRouter({

//   getAll: publicProcedure.query( async ({ ctx }) => {
//     const posts = await ctx.prisma.post.findMany({
//         take: 100,
//         orderBy: [
//             {createdAt: "desc"}
//         ]
//     });

//     const users = (
//         await clerkClient.users.getUserList({
//             userId: posts.map((post) => post.authorId)
//         })
//     ).map(filterUserForClient)

//     console.log(users)

//     return posts.map((post) => {
//         const author = users.find((user) => user.id === post.authorId)

//         if (!author || !author.username) throw new TRPCError({
//             code: "INTERNAL_SERVER_ERROR", 
//             message: "Author for Post not found"
//         })

//     return {
//         post, 
//         author
//      };
        
    
//     })

//   }),

//    create: privateProcedure.input(z.object({
//     content: z.string().emoji("Only emojis are allowed in this place, friendo.").min(1).max(280)
//    })
//    )
//    .mutation(async ({ctx, input}) => {

//     const authorId = ctx.userId

//     const { success } = await ratelimit.limit(authorId)

//     if (!success) throw new TRPCError({code: "TOO_MANY_REQUESTS"})

//     const post = await ctx.prisma.post.create({
//         data: {
//             authorId,
//             content:input.content,
//         }
//     })

//     return post


//    })
// })
