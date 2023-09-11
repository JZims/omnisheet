import NewNav from "~/components/newnav";
import { useState } from "react"
import { useUser } from "@clerk/nextjs"

 export default function SMultipleTextFields() {

    // const newSheet: Character = {
    //     id: "qceqxqwx",
    //     charFirstName: "Bob", 
    //     charLastName: "Guy",
    //     charLevel: 4, 
    //     xpPoints: 250, 
    //     classes: ["Bard", "Sorcerer"],
    
    // }

    interface TextField {
        id: number;
        value: string;
      }
      
      
        const [textFields, setTextFields] = useState<TextField[]>([
          { id: 1, value: '' },
          { id: 2, value: '' },
          { id: 3, value: '' },
        ]);
      
        const handleTextFieldChange = (id: number, newValue: string) => {
          setTextFields(prevTextFields =>
            prevTextFields.map(field =>
              field.id === id ? { ...field, value: newValue } : field
            )
          );
        };

        const { user } = useUser()

  return (
    <>
        <NewNav />
    <div>
      {textFields.map(field => (
        <input
          key={field.id}
          type="text"
          value={field.value}
          onChange={e => handleTextFieldChange(field.id, e.target.value)}
        />
      ))}
    </div>
    </>
  );
};


 
