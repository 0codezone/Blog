import Post from "../post/Post";
import "./posts.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts({ posts }) {
  //# take post as props from home page post tag and use it with map fun.

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(
        "https://mern-blog-app-i7er.onrender.com/api/categories"
      );
      setCats(res.data); // Update state with the data property from the response
      // console.log(res.data);
    };
    getCats();
  }, []);

  return (
    <>
      <div className="posts">
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((cat, key) => (
              <Link to={`/?cat=${cat.name}`} className="link" key={key}>
                <li className="sidebarListItem">{cat.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="scrollable-div">
          {posts.map((p, key) => (
            <Post key={key} post={p} />
          ))}
        </div>
      </div>
    </>
  );
}
