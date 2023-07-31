import { JSONValue } from "superjson/dist/types"


type Character = {
    id: string,
    charFirstName: string, 
    charLastName: string,
    charLevel: number, 
    xpPoints: number, 
    classes: string[] | undefined,
} 

export default Character