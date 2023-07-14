import type Sheet from "../../interfaces/sheet"

const newSheet: Sheet = {
    id: "qceqxqwx",
    charFirstName: "Bob", 
    charLastName: "Guy",
    charLevel: 4, 
    xpPoints: 250, 
    classes: ["bard"],

}
 export default function SheetPage() {

    return(

        <div>
            <h1>{newSheet.charFirstName}</h1>
            <h2>lvl {newSheet.charLevel}</h2>
            <h2>{newSheet.classes[0]}</h2>
        </div>
        
    )
    

 }
