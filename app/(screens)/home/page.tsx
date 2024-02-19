import { auth, signOut } from "@/auth";
// import { signOut } from "next-auth/react";
import React from "react";

async function Home() {
  const session = await auth();
  return (
    <div>
      {session?.user?.email}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Sign out</button>
      </form>
    </div>
  );
}

export default Home;
