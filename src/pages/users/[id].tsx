// pages/example.tsx
import { UserButton } from "@clerk/nextjs";
 
export default function UserPage() {
  return (
    <>
			<header>
				<UserButton afterSignOutUrl="/"/>
			</header>
			<div>Your page&apos;s content can go here.</div>
    </>
  );
}