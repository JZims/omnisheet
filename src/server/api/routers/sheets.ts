
import { createTRPCRouter, publicProcedure } from "src/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";





export const sheetsRouter = createTRPCRouter({

    //Gets 100 results from ALL sheets in the Database
    
      getSheets: publicProcedure
      .input(
        z
          .object({
            userName: z.string(),
            userId: z.string(),
          })
          .nullish(),
      )
      
      .query( async ({ ctx, input }) => {
    
        if(input && input.userName){
    
            // Find Sheets associated with logged in User
            const sheets = ( 
                await ctx.prisma.sheet.findMany({
    
                where:{
                    authorName:{
                        equals: input.userName 
                        }
                     }
                 }))
                 
             
            
            
             return {
                sheets,
                
            };
                    
        } else throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR", 
            message: "Sheets not found with Author"
        })
    
    
    
        })
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


})