import type Character from "../../types/character"

const newSheet: Character = {
    id: "qceqxqwx",
    charFirstName: "Bob", 
    charLastName: "Guy",
    charLevel: 4, 
    xpPoints: 250, 
    classes: ["Bard", "Sorcerer"],

}
 export default function SheetPage() {

    return(

        <div className="flex justify-center flex-auto">
            <h1 className="grow">{newSheet.charFirstName}</h1>
            <h1 className="grow">{newSheet.charLastName}</h1>
            <h2 className="grow">lvl {newSheet.charLevel}</h2>
            <h2 className="grow">{ !!newSheet.classes ? newSheet.classes.map((className) => { return className + " "}) : "(no class selected)"}</h2>
        </div>
        
    )
    

 }
