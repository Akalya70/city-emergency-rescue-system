import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleRegister = async () => {

    const res = await registerUser(user);

    if (res) {

      alert("Registration Successful");

      navigate("/");
    }
  };

  return (

    <div className="container">

      <h2>Register</h2>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value
          })
        }
      />

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

        <option value="">
          Select Role
        </option>

        <option value="ADMIN">
          Admin
        </option>

        <option value="CITIZEN">
          Citizen
        </option>

        <option value="FIRE">
          Fire Service
        </option>

        <option value="POLICE">
          Police
        </option>

        <option value="AMBULANCE">
          Ambulance
        </option>

      </select>

      <button onClick={handleRegister}>
        Register
      </button>

    </div>
  );
}

export default Register;