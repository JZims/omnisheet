import type { Character } from "~/interfaces/character"



export const filterCharacterSheet = (char: Character): Character  => {
    return {
        id: char.id, 
        charFirstName: char.charFirstName, 
        charLastName: char.charLastName,
        xpPoints: char.xpPoints,
        classes: char.classes,
        charLevel: char.charLevel
    }
} 