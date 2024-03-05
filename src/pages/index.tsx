import { useUser, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Head from "next/head";
import { api } from "~/utils/api";
import { useState } from "react";
import { LoadingPage } from "~/components/loading";
import type { Character } from "~/types/character";
import type { Sheet } from "~/types/sheets";
import NewNav from "~/components/newnav";
import FifthEdSheet from "public/fifth_edition_pkg/5eSheet";


export default function Welcome() {
  const [gameSystem, setGameSystem] = useState("");
  const [highightedChar, setHighlightedChar] = useState<Character | undefined>(
    undefined
  );
  const { isSignedIn, isLoaded, user } = useUser();
  const { sessionId } = useAuth();

  // Dropdown Components

  const SystemDropdown = () => {
    return (
      <>
        <details className="dropdown col-span-1 mb-32">
          <summary className="btn m-1">Game System</summary>
          <ul className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow">
            <li>
              {" "}
              <a
                id="dnd5e"
                onClick={(e) => {
                  setGameSystem(e.currentTarget.id);
                }}
              >
                D&D 5E
              </a>
            </li>
            <li>
              <a
                id="fate"
                onClick={(e) => {
                  setGameSystem(e.currentTarget.id);
                }}
              >
                FATE
              </a>
            </li>
          </ul>
        </details>
      </>
    );
  };

  const SheetsDropdown = () => {
    if (isLoaded && user && user.username) {
      const { data } = api.sheets.getSheets.useQuery({
        userName: user.username,
        userId: user.id,
      });
      if (data?.sheets) {
        const filteredSheets: Sheet[] = data.sheets.filter((sheet) => {
          if (sheet.system === gameSystem) {
            return sheet;
          }
        });

        return (
          <>
            <details className="dropdown col-span-1 col-start-2 mb-32">
              <summary className="btn m-1">Characters</summary>
              <ul className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow">
                {filteredSheets?.map((sheet, index) => {
                  const characterData = sheet.character as Character;
                  if (!isLoaded) {
                    return <LoadingPage key={index} />;
                  }
                  if (sheet.character != null) {
                    return (
                      <li key={index}>
                        <a
                          key={index}
                          id={sheet.id.toString()}
                          onClick={() => {
                            setHighlightedChar(characterData);
                          }}
                        >
                          {characterData.charFirstName}{" "}
                          {characterData.charLastName}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </details>
          </>
        );
      }
    }
  };

  // Section container for Dropdowns
  const Selection = () => {
    return (
      <>
        <SystemDropdown />
        {gameSystem != "" && <SheetsDropdown />}
      </>
    );
  };

  const PreviewWindow = () => {
    //Render un-editable version of selected Character
    return (
      <div className=" m-4 grid grid-flow-col auto-rows-fr grid-cols-2 grid-rows-6">
        <div>
          {" "}
          Current Character:{" "}
          <h1 className="text-lg font-bold">
            {highightedChar?.charFirstName} {highightedChar?.charLastName}
          </h1>
        </div>
        <div className="col-span-2 row-span-5 row-start-2 mt-2 rounded-lg border-2">
          <FifthEdSheet />
        </div>
      </div>
    );
  };

  if (!isSignedIn && !sessionId && isLoaded) {
    return (
      <div>
        <span>Welcome to OSheet!</span>
        <p>
          Sign in{" "}
          <Link href="/sign-in">
            <strong>here!</strong>
          </Link>
        </p>
      </div>
    );
  } else if (isLoaded === true && user?.profileImageUrl) {
    return (
      <>
        <NewNav profileImgUrl={user?.profileImageUrl} />

        <Head>
          <title>Omnisheet</title>
          <meta name="description" content="created by Josh Zimmerman" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="bg-[#2e026d] text-2xl ">Here&apos;s your homepage!</h1>
        <main className=" min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="grid grid-cols-2 gap-12 px-4 py-16">
            <Selection />
          </div>
          {highightedChar?.charLastName ? <PreviewWindow/> : null}
        </main>
      </>
    );
  }
}
