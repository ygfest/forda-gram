import { getPosts } from "../../actions/post.action";

async function PostCard() {
  const posts = await getPosts();
  return <div></div>;
}

export default PostCard;
