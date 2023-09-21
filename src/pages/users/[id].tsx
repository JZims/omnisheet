// pages/example.tsx
import { UserButton } from "@clerk/nextjs";
import NewNav from "~/components/newnav";
import Link from "next/link";
import { useUser, useAuth } from "@clerk/nextjs"
 
export default function UserPage() {

  const { user, isSignedIn, isLoaded } = useUser()
  const { sessionId } = useAuth()


  if (!isSignedIn && !sessionId && isLoaded) {

    return(
        <div>
            <span>User Not Found! </span>
            <p>Please Sign in <Link href="/sign-in"><strong>here!</strong></Link></p>
        </div>
        
    )
}       

else if (isLoaded === true && user?.profileImageUrl)

  return (
    <>
      
			<header>
      <NewNav profileImgUrl={ user?.profileImageUrl ? user?.profileImageUrl: "null"}/>
			</header>
			<div>Your page&apos;s content can go here.</div>
    </>
  );
}