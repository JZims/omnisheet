
import Link from "next/link";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";



export default function NavBar () {

const {isLoaded, userId, sessionId} = useAuth()
const { user } = useUser()

console.log(user)

    if (isLoaded && userId && sessionId) {
    

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