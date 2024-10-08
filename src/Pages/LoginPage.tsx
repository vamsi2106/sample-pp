import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/login/loginSlice";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch<any>(loginUser({ username, password })).then((response:any) => {
      if (loginUser.fulfilled.match(response)) {
        navigate("/"); // Navigate after successful login
      } else {
        console.error("Login failed:", response.payload);
      }
    });
  };

  return (
    <div className="loginPage">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <h2>Login</h2>
      
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
