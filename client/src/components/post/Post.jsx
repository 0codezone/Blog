import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const PF = "http://localhost:8801/file/";
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          // src={"https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
          src={PF + post.photo}
          alt=""
        />
      )}

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{post.categories}</span>
        </div>
        <Link to={`post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <br />
      <hr />
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
