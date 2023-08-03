
import type { JSONValue } from "superjson/dist/types"
import type { Character } from "./character"


export type Sheet = {
    id: number, 
    createdAt: Date,
    authorName: string,
    system: string,
    character: Character | JSONValue
  }