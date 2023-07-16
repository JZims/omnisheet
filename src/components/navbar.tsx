
import Link from "next/link";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";



export default function NavBar () {

const {isLoaded, userId, sessionId} = useAuth()
const { user, isSignedIn } = useUser()


    if (isLoaded && isSignedIn) {

        return (
        <> 
            <div>
                <SignOutButton> Sign Out </SignOutButton>
                <Link href={`/users/${userId}`}> Account Info </Link>
                <Link href={"/new-sheet"}> New Sheet </Link>
            </div>
        </>  
    )

    } else return null

}