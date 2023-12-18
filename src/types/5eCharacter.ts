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
            }, 
            athletics: {
                score: number,
                trained: boolean
            }
        },
        dexterity:{
            score: number,
            savingThrow: {
                score: number,
                trained: boolean
            },
            acrobatics: {
                score: number,
                trained: boolean
            },
            sleightOfHand: {
                score: number,
                trained: boolean
            },
            stealth: {
                score: number,
                trained: boolean
            },

        },
        constitution:{
            score: number,
            savingThrow: {
                score: number,
                trained: boolean
            },
        },
        intelligence:{
            score: number,
            savingThrow: {
                score: number,
                trained: boolean
            },
            arcana: {
                score: number,
                trained: boolean
            },
            history: {
                score: number,
                trained: boolean
            },
            investigation: {
                score: number,
                trained: boolean
            },
            nature: {
                score: number,
                trained: boolean
            },
            religion: {
                score: number,
                trained: boolean
            },
        },
        wisdom:{
            score: number,
            savingThrow: {
                score: number,
                trained: boolean
            },
            animalHandling: {
                score: number,
                trained: boolean
            },
            insight: {
                score: number,
                trained: boolean
            },
            medicine: {
                score: number,
                trained: boolean
            },
        },
        charisma:{
            score: number,
            savingThrow: {
                score: number,
                trained: boolean
            },
            deception: {
                score: number,
                trained: boolean
            },
            intimidation: {
                score: number,
                trained: boolean
            },
            performance: {
                score: number,
                trained: boolean
            },
            persuasion: {
                score: number,
                trained: boolean
            },

        },
    },
    rightColumn:{
        armorClass: number,
        initiative: number,
        speed: number,
        xpPoints: number, 
        charLevel: number,
        conditions: string[]
    }
    

} 
