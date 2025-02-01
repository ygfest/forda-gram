"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getPosts, toggleLike } from "../../actions/post.action";
import { setHeapSnapshotNearHeapLimit } from "v8";
import toast from "react-hot-toast";

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];

async function PostCard({
  post,
  dbUserId,
}: {
  post: Post;
  dbUserId: string | null;
}) {
  //const posts = await getPosts();
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(
    post.likes.some((like: any) => like.userId === dbUserId)
  );
  const [optimisticLike, setOptimisticLike] = useState(post._count.likes);

  const handleLike = async () => {
    if (isLiking) return;
    try {
      setIsLiking(true);
      setHasLiked((prevState: any) => !prevState);
      setOptimisticLike((prevState: any) => prevState + (hasLiked ? -1 : 1));
      await toggleLike(post.id);
    } catch (error) {
      setHasLiked(post.likes.some((like: any) => like.userId === dbUserId));
      setOptimisticLike(post._count.likes);
      toast.error("Error liking post");
    } finally {
      setIsLiking(false);
    }
  };

  return <div></div>;
}

export default PostCard;
