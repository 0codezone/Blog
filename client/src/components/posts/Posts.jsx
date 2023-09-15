import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) {//# take post as props from home page post tag and use it with map fun.
  return (
    <div className="posts">
      {
        posts.map((p, key)=>(
          <Post  key={key} post={p} />
        ))
      }
    </div>
  );
}