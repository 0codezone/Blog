// Topbar.jsx
import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://mern-blog-app-i7er.onrender.com/file/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`top ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="topLeft">
        <h1>BLOG</h1>
      </div>

      <div className={`topCenter ${mobileMenuOpen ? "active" : ""}`}>
        <ul className={`topList ${mobileMenuOpen ? "active" : ""}`}>
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>

          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className={`topRight ${mobileMenuOpen ? "active" : ""}`}>
        {user ? (
          <Link className="link" to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className={`topList ${mobileMenuOpen ? "active" : ""}`}>
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>

      {/* Mobile menu button */}
      <div className="mobileMenuButton" onClick={toggleMobileMenu}>
        <i className={`fas fa-bars ${mobileMenuOpen ? "active" : ""}`}></i>
      </div>
    </div>
  );
}
