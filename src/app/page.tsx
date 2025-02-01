import CreatePost from "@/components/create-post";
import PostCard from "@/components/post-card";

import SuggestedUser from "@/components/suggested-user";

import { auth } from "@clerk/nextjs/server";
import { getPosts } from "../../actions/post.action";

export default async function Home() {
  const user = await auth();
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className=" hidden lg:block lg:col-span-4">
        <SuggestedUser />
      </div>
    </div>
  );
}
