import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Head from "next/head";
// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Omnisheet</title>
        <meta name="description" content="created by Josh Zimmerman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <SignedIn>
            <SignOutButton>
              <button className="border-2 border-slate-200 bg-white">Sign Out</button>
            </ SignOutButton>
          </SignedIn>
        </div>
      </main>
    </>
  );
}
