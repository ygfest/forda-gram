import CreatePost from "@/components/create-post";
import PostCard from "@/components/post-card";

import SuggestedUser from "@/components/suggested-user";

import { auth } from "@clerk/nextjs/server";
import { getPosts } from "../../actions/post.action";
import { getDbUserId } from "../../actions/user.action";

export default async function Home() {
  const user = await auth();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </div>
      <div className=" hidden lg:block lg:col-span-4">
        <SuggestedUser />
      </div>
    </div>
  );
}
