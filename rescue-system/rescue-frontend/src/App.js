import React from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import CitizenDashboard from "./pages/CitizenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import FireDashboard from "./pages/FireDashboard";
import PoliceDashboard from "./pages/PoliceDashboard";
import AmbulanceDashboard from "./pages/AmbulanceDashboard";

function App() {

  return (

    <BrowserRouter>

      <div className="App">

        <div className="navbar">
          🚨 City Emergency Rescue System
        </div>

        <h1 className="welcome">
          Emergency Help & Rescue Management
        </h1>

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/citizen"
            element={<CitizenDashboard />}
          />

          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

          <Route
            path="/fire"
            element={<FireDashboard />}
          />

          <Route
            path="/police"
            element={<PoliceDashboard />}
          />

          <Route
            path="/ambulance"
            element={<AmbulanceDashboard />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;