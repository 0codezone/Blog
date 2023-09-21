import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // submit to kr deta h or bar bar refresh krne se bachata h
    setError(false);
    try {
      const res = await axios.post(
        "https://mern-blog-app-i7er.onrender.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }

    // Clear the input fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          autoComplete="on"
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{ color: "red" }}>Something wen wrong !</span>}
    </div>
  );
}
