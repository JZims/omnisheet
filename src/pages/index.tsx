

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

    
  // Dropdown Components

    const SystemDropdown = () => {

      return (
        <>
          <details className="dropdown mb-32 col-span-1">
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

      if (data?.sheets) {

      const filteredSheets: Sheet[] = data.sheets.filter((sheet) => {

          if (sheet.system === gameSystem) {
            
            return sheet
          }
        })

      return (
        <>
          <details className="dropdown mb-32 col-span-1 col-start-2">
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

  // Section container for Dropdowns
    const Selection = () => {

      return (

        <>
            <SystemDropdown />
            { gameSystem != "" && <SheetsDropdown /> }
        </>

      )
    
    }

    const PreviewWindow = () => {
        //Render un-editable version of selected Character
      return (
        <div className=" grid grid-cols-2 grid-flow-col grid-rows-6 auto-rows-fr m-4">
          <p> Current Character: <h1 className="font-bold text-lg">{highightedChar?.charFirstName} {highightedChar?.charLastName}</h1></p>
          <div className="mt-2 col-span-2 row-start-2 row-span-5 border-2 rounded-lg">

          </div>
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
            <h1 className="bg-[#2e026d] text-2xl ">Here&apos;s your homepage!</h1>
            <main className=" min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
              <div className="grid grid-cols-2 gap-12 px-4 py-16">
                
                <Selection />
                
              </div>
              { highightedChar?.charLastName ? <PreviewWindow /> : null }
            </main>
            
         </>
        )
    }


}