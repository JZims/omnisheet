import NewNav from "~/components/newnav";
import Link from "next/link";
import { useUser, useAuth } from "@clerk/nextjs"
import CharacterSheetWindow from "~/components/charactersheetwindow";

 export default function SMultipleTextFields() {

  const { user, isSignedIn, isLoaded } = useUser()
  const { sessionId } = useAuth()

    if (!isSignedIn && !sessionId && isLoaded) {

          return(
              <div>
                  <span>Welcome to OSheet!</span>
                  <p>Sign in <Link href="/sign-in"><strong>here!</strong></Link></p>
              </div>
              
          )
      }       

   else if (isLoaded === true && user?.profileImageUrl) return (
    <>
        <NewNav profileImgUrl={ user?.profileImageUrl ? user?.profileImageUrl: "null"}/>
    <div>
      <CharacterSheetWindow />
    </div>
    </>
  );
};


 
