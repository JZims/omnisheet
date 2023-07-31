
import { JSONValue } from "superjson/dist/types"
import Character from "./character"


export type Sheet = {
    id: number, 
    createdAt: Date,
    authorName: string,
    system: string,
    character: Character | JSONValue
  }