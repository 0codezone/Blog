import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://mern-blog-app-i7er.onrender.com/file/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{post.categories}</span>
        </div>
        <div className="postTitle">
          <Link to={`post/${post._id}`} className="postTitle-link">
            <span>{post.title}</span>
          </Link>
        </div>

        <hr />
        <p className="postDesc">{post.desc}</p>
        <hr />
        <div className="postDetails">
          <span className="postAuthor">By: {post.username}</span>
          <br />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
