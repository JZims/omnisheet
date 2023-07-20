
import { createTRPCRouter, publicProcedure } from "src/server/api/trpc";
import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { filterUserForClient } from "src/server/helpers/filterUserForClient"
// import { z } from "zod";


export const sheetsRouter = createTRPCRouter({

  getAll: publicProcedure.query( async ({ ctx }) => {
    const sheets = await ctx.prisma.sheet.findMany({
        take: 100,
        orderBy: [
            {createdAt: "desc"}
        ]
    });
    
    // Find User on Clerk

    const users = (
        await clerkClient.users.getUserList({
            userId: sheets.map((sheet) => sheet.authorEmail)
        })
    ).map(filterUserForClient)

    console.log(users)

    // Filter DB entries for found User

    return sheets.map((sheet) => {
        const author = users.find((user) => user.emailAddress === sheet.authorEmail)

        if (!author || !author.username) throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR", 
            message: "Author for Sheet not found"
        })

        return {
            sheets, 
            author
        };
        
    
    })
})
})
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

  
