
import Link from "next/link";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";



export default function NavBar () {

const { isLoaded } = useAuth()
const { isSignedIn, user } = useUser()


    if (isLoaded && isSignedIn && user.username != null) {

        return (
        <> 
            <div className="flex justify-center flex-auto">
                <SignOutButton> 
                    <button className="grow">Sign Out</button>     
                </SignOutButton>
                <Link className="grow" href={`/users/${user.username ? user.username : `not-found` }`}> Account Info </Link>
                <Link className="grow" href={"/new-sheet"}> New Sheet </Link>
            </div>
        </>  
    )

    } else return null

}  