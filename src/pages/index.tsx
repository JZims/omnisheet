

import { useUser, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import NavBar from "~/components/navbar";
import Head from "next/head";
// import Page from "../sign-in/[[...index]]";



export default function Welcome() {
    const {isSignedIn} = useUser()
    const {sessionId} = useAuth()

    if (!isSignedIn && !sessionId) {

        return(
            <div>
                <span>Welcome to OSheet!</span>
                <p>Sign in <Link href="/sign-in"><strong>here!</strong></Link></p>
            </div>
            
        )
    } else {
        return (
          <>
            <NavBar />
               
            <Head>
              <title>Omnisheet</title>
              <meta name="description" content="created by Josh Zimmerman" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
              <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                
                <p>Here&apos;s your homepage!</p>
                
              </div>
            </main>
         </>
        )
    }


}