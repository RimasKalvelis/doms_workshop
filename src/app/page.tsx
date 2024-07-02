import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {!session && <SignIn />}
          {session && <SignOut />}
        </div>
      </div>
    </main>
  );
}
