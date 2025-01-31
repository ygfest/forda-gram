import CreatePost from "@/components/create-post";

import SuggestedUser from "@/components/suggested-user";

import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await auth();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">{user ? <CreatePost /> : null}</div>
      <div className="lg:col-span-4">
        <SuggestedUser />
      </div>
    </div>
  );
}
