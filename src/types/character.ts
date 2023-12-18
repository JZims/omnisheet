


export type Character = {
    id: string,
    charFirstName: string, 
    charLastName: string,
    charLevel: number, 
    xpPoints: number, 
    classes: string[],
} 

export type fifthEditionCharacter = {
    id: string,
    heading:{
        charFirstName: string, 
        charLastName: string,
        charRace: string,
        alignment: string,
        background: string,
        classes: string[]
    },
    leftColumn:{
        proficiencyBonus: number, 
        passivePerception: number, 
        inspirationPoints: number,
        strength:{
            score: number,
            savingThrow: {
                score: number,
                trained: boolean
            } 
            athletics: {
                score: number,
                trained: boolean
            }

        },
        dexterity:{

        },
        constitution:{

        },
        intelligence:{

        },
        wisdom:{

        },
        charisma:{

        },
    },
  
    xpPoints: number, 
    charLevel: number,

} 
