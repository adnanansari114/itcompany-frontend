import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./admin.css";
const API = import.meta.env.VITE_APP_API_URL;

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common["Content-Type"] = "application/json";

export default function AdminLogin({ setIsAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API}/api/admin/login`, {
        email,
        password,
      });

      console.log("Login Response:", res.data);

      if (res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
        navigate('/admin/dashboard')
      } else {
        setMessage(res.data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="admin-login">
      <div className="login-box">
        <h2>Admin Login</h2>

        {message && <p className="error-msg">{message}</p>}

        <form onSubmit={handleLogin}>
          <div className="inputGroup">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter admin email"
            />
          </div>

          <div className="inputGroup">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>

          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}
