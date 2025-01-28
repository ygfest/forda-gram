import DeleteUser from "@/components/delete-user";
import SideBarSection from "@/components/side-bar-section";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user = await auth();

  return (
    <div>
      <SignedOut>
        <Button variant={"outline"}>
          <SignInButton />
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
