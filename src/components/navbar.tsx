
import Link from "next/link";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";



export default function NavBar () {

const {isLoaded, userId} = useAuth()
const { isSignedIn } = useUser()


    if (isLoaded && isSignedIn && userId) {

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