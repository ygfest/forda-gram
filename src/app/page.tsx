import CreatePost from "@/components/create-post";
import DeleteUser from "@/components/delete-user";
import SideBarSection from "@/components/side-bar-section";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user = await auth();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gaps-6">
      <div className="lg:col-span-6">{user ? <CreatePost /> : null}</div>
      <div className="lg:col-span-4"></div>
    </div>
  );
}
