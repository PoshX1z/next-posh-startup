import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return (
    //Navbar use header tag for semantic.
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        {/* Logo title */}
        <Link href="/">
          <p className="text-black font-extrabold text-2xl">
            POSH
            <span className="text-blue-500"> STARTUP</span>
          </p>
        </Link>

        <div className="flex items-center gap-5 text-black">
          {/* Shows information on navbar */}
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            //Use <form> to handle signIn, signOut.
            <form
              action={async () => {
                "use server";
                await signIn("github"); //signIn is asynchronous so it should be handled with async method.
              }}
            >
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
