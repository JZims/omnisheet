

import { useUser, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Head from "next/head"; 
import { api } from "~/utils/api";
import { useState } from "react";
import { LoadingPage } from "~/components/loading";
import type { Character } from "~/types/character";
import type { Sheet } from "~/types/sheets";
import NewNav from "~/components/newnav";







export default function Welcome() {

    const [gameSystem, setGameSystem] = useState("")
    const [highightedChar, setHighlightedChar] = useState<Character | undefined>(undefined)
    const {isSignedIn, isLoaded, user} = useUser()
    const { sessionId } = useAuth()

    


    const SystemDropdown = () => {

      return (
        <>
          <details className="dropdown mb-32">
            <summary className="m-1 btn">Game System</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li> <a id="dnd5e" onClick={(e) => {setGameSystem(e.currentTarget.id)}}>D&D 5E</a></li>
              <li ><a id="fate" onClick={(e) => {setGameSystem(e.currentTarget.id)}}>FATE</a></li>
            </ul>
          </details>
      </>
      )

    }

    const SheetsDropdown = () => {

      if ( isLoaded && user && user.username){ 

      const { data } = api.sheets.getSheets.useQuery({userName: user.username, userId: user.id})

      if (data) {

      const filteredSheets: Sheet[] = data.sheets.filter((sheet) => {

          if (sheet.system === gameSystem) {
            
            return sheet
          }
        })

      return (
        <>
          <details className="dropdown mb-32">
            <summary className="m-1 btn">Characters</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              { filteredSheets?.map((sheet, index) => {
                  
                  const characterData = sheet.character as Character

                if(!isLoaded) {
                  return <LoadingPage key={index}/>
                }
                 if(sheet.character != null ){
  
                  return (
                    <li key={index}> 
                      <a key={index} id={sheet.id.toString()} onClick={() => {setHighlightedChar(characterData)}}>
                    
                       {characterData.charFirstName} {characterData.charLastName}
                      </a>
                    </li> 
                  )
                 }
                }) 
              }
            </ul>
          </details>
      </>
      )

    }
  }
  }
        
    const Feed = () => {

      return (

        <div>
            <SystemDropdown />
            <br/>
            { gameSystem != "" && <SheetsDropdown /> }
        </div>

      )
    
    }

    const PreviewWindow = () => {

      return (
        <div>
          <h1> You chose {highightedChar?.charFirstName} {highightedChar?.charLastName}</h1>
        </div>
      )

    }


    if (!isSignedIn && !sessionId && isLoaded) {

        return(
            <div>
                <span>Welcome to OSheet!</span>
                <p>Sign in <Link href="/sign-in"><strong>here!</strong></Link></p>
            </div>
            
        )
    } else if (isLoaded === true && user?.profileImageUrl) {

   

        return (
          <>
            <NewNav profileImgUrl={user?.profileImageUrl} />
               
            <Head>
              <title>Omnisheet</title>
              <meta name="description" content="created by Josh Zimmerman" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-row min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
              <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                
                <p>Here&apos;s your homepage!</p>
               
                <Feed />

                <div className="flex-row">
                 
                </div>

                { highightedChar?.charLastName ? <PreviewWindow /> : null}
                
              </div>
            </main>
         </>
        )
    }


}