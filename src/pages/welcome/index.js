import { useUser, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import NavBar from "~/components/navbar";



export default function Welcome() {
    const {isSignedIn} = useUser()
    const {isLoaded, sessionId} = useAuth()

    if (!isSignedIn && !sessionId) {

        return(
            <div>
                <span>Welcome to OSheet!</span>
                <p>Sign in <Link href="/sign-in"><strong>here!</strong></Link></p>
            </div>
            
        )
    } else {
        return (
            <div>
                <NavBar />
            </div>
        )
    }

    return (
    <Page />
)

}