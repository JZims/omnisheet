
import Link from "next/link";

export default function NotFound () {

return (

    <div>
        <p>User Name invalid or not found. </p>
        <p>Please  <Link href="/sign-in" className="underline hover:text-green-400">Sign in</Link> again.</p>
    </div>
)
}
