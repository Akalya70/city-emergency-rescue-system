import React, { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  addEmergency
} from "../services/api";

function CitizenDashboard() {

  const navigate = useNavigate();

  const [emergency, setEmergency] = useState({

    type: "",

    location: "",

    description: "",

    status: "PENDING",

    assignedTo: ""
  });

  // LOGOUT

  const logout = () => {

    alert("Logged Out");

    navigate("/");
  };

  // SEND EMERGENCY

  const handleSubmit = async () => {

    if (

      !emergency.type ||

      !emergency.location ||

      !emergency.description

    ) {

      alert("Please Fill All Fields");

      return;
    }

    // AUTO ASSIGN TEAM

    let assignedTeam = "";

    // FIRE

    if (emergency.type === "FIRE") {

      assignedTeam = "FIRE_SERVICE";
    }

    // MEDICAL

    else if (emergency.type === "MEDICAL") {

      assignedTeam = "AMBULANCE_SERVICE";
    }

    // CRIME

    else if (emergency.type === "CRIME") {

      assignedTeam = "POLICE_SERVICE";
    }

    // ACCIDENT

    else if (emergency.type === "ACCIDENT") {

      assignedTeam = "AMBULANCE_SERVICE";
    }

    // CREATE OBJECT

    const newEmergency = {

      ...emergency,

      assignedTo: assignedTeam,

      status: "ASSIGNED"
    };

    try {

      const res = await addEmergency(
        newEmergency
      );

      if (res) {

        alert(
          "🚨 Emergency Alert Sent To " +
          assignedTeam
        );

        // RESET FORM

        setEmergency({

          type: "",

          location: "",

          description: "",

          status: "PENDING",

          assignedTo: ""
        });
      }

    } catch (error) {

      console.log(error);

      alert(
        "Failed To Send Emergency Request"
      );
    }
  };

  return (

    <div className="container">

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <h2>🧑 Citizen Dashboard</h2>

        <button
          onClick={logout}
          style={{
            width: "120px",
            height: "45px"
          }}
        >
          Logout
        </button>

      </div>

      {/* CARD */}

      <div className="card">

        <h3>
          Raise Emergency Request
        </h3>

        {/* TYPE */}

        <select

          value={emergency.type}

          onChange={(e) =>

            setEmergency({

              ...emergency,

              type: e.target.value
            })
          }
        >

          <option value="">
            Select Emergency
          </option>

          <option value="FIRE">
            🔥 Fire Accident
          </option>

          <option value="MEDICAL">
            🚑 Medical Emergency
          </option>

          <option value="CRIME">
            🚓 Crime
          </option>

          <option value="ACCIDENT">
            🚨 Road Accident
          </option>

        </select>

        {/* LOCATION */}

        <input

          type="text"

          placeholder="Enter Location"

          value={emergency.location}

          onChange={(e) =>

            setEmergency({

              ...emergency,

              location: e.target.value
            })
          }
        />

        {/* DESCRIPTION */}

        <textarea

          placeholder="Describe Emergency"

          value={emergency.description}

          onChange={(e) =>

            setEmergency({

              ...emergency,

              description: e.target.value
            })
          }

          style={{

            width: "100%",

            height: "120px",

            borderRadius: "10px",

            padding: "12px",

            marginTop: "10px",

            marginBottom: "20px",

            border: "none",

            outline: "none",

            background:
              "rgba(255,255,255,0.2)",

            color: "white",

            fontSize: "16px"
          }}
        />

        {/* BUTTON */}

        <button onClick={handleSubmit}>

          🚨 Send Emergency Alert

        </button>

      </div>

      {/* INFO CARD */}

      <div className="card">

        <h3>📢 Emergency Routing</h3>

        <p>
          🔥 FIRE → Fire Service
        </p>

        <p>
          🚑 MEDICAL → Ambulance Service
        </p>

        <p>
          🚓 CRIME → Police Service
        </p>

        <p>
          🚨 ACCIDENT → Ambulance Service
        </p>

      </div>

    </div>
  );
}

export default CitizenDashboard;