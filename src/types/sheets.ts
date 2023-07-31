import type { User } from "@prisma/client"
import type { Character } from "./character"

export type Sheet = {
    id: number, 
    createdAt: string,
    authorName: string,
    author: User,
    system: string,
    character: Character
  }