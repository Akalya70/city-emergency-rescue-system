import React, { useState } from "react";

import { addEmergency } from "../services/api";

function Dashboard() {

  const [data, setData] = useState({
    type: "MEDICAL",
    location: "",
  });

  const handleSubmit = async () => {

    const res = await addEmergency(data);

    if (res) {

      alert("Emergency Sent Successfully");

      setData({
        type: "MEDICAL",
        location: "",
      });

    } else {

      alert("Failed");

    }
  };

  return (

    <div className="container">

      <h2>🚨 CITIZEN DASHBOARD</h2>

      <select
        value={data.type}
        onChange={(e) =>
          setData({
            ...data,
            type: e.target.value
          })
        }
      >

        <option value="MEDICAL">
          Medical Emergency
        </option>

        <option value="FIRE">
          Fire Accident
        </option>

        <option value="CRIME">
          Crime Emergency
        </option>

      </select>

      <input
        type="text"
        placeholder="Enter Location"
        value={data.location}
        onChange={(e) =>
          setData({
            ...data,
            location: e.target.value
          })
        }
      />

      <button onClick={handleSubmit}>
        Send Emergency Alert
      </button>

    </div>
  );
}

export default Dashboard;