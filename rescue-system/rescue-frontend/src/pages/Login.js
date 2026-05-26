import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleLogin = async () => {

    try {

      const res = await loginUser(user);

      if (
        res &&
        res.email &&
        res.role === user.role
      ) {

        alert(res.role + " Login Successful");

        if (res.role === "ADMIN") {
          navigate("/admin");
        }

        else if (res.role === "POLICE") {
          navigate("/police");
        }

        else if (res.role === "AMBULANCE") {
          navigate("/ambulance");
        }

        else if (res.role === "FIRE") {
          navigate("/fire");
        }

        else {
          navigate("/citizen");
        }

      } else {

        alert("Invalid Credentials or Role");

      }

    } catch (error) {

      alert("Backend Server Not Running");
    }
  };

  return (

    <div className="container">

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) =>
          setUser({
            ...user,
            password: e.target.value
          })
        }
      />

      <select
        onChange={(e) =>
          setUser({
            ...user,
            role: e.target.value
          })
        }
      >

        <option value="">Select Role</option>

        <option value="ADMIN">ADMIN</option>

        <option value="CITIZEN">CITIZEN</option>

        <option value="POLICE">POLICE</option>

        <option value="AMBULANCE">AMBULANCE</option>

        <option value="FIRE">FIRE</option>

      </select>

      <button onClick={handleLogin}>
        Login
      </button>

      <br /><br />

      <Link
        to="/register"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        New User? Register Here
      </Link>

    </div>
  );
}

export default Login;