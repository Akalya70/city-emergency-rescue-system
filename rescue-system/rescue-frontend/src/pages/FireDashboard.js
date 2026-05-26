import React, { useEffect, useState } from "react";

import {
  getEmergencies,
  updateEmergency
} from "../services/api";

function AdminDashboard() {

  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
    loadEmergencies();
  }, []);

  const loadEmergencies = async () => {

    const data = await getEmergencies();

    setEmergencies(data);
  };

  const assignFireTeam = async (id) => {

    await updateEmergency(
      id,
      "IN_PROGRESS",
      "FIRE_TEAM"
    );

    alert("🔥 Fire Team Assigned");

    loadEmergencies();
  };

  const assignPoliceTeam = async (id) => {

    await updateEmergency(
      id,
      "IN_PROGRESS",
      "POLICE_TEAM"
    );

    alert("🚓 Police Team Assigned");

    loadEmergencies();
  };

  const assignAmbulanceTeam = async (id) => {

    await updateEmergency(
      id,
      "IN_PROGRESS",
      "AMBULANCE_TEAM"
    );

    alert("🚑 Ambulance Team Assigned");

    loadEmergencies();
  };

  return (

    <div className="container">

      <h2>🚨 ADMIN DASHBOARD</h2>

      {

        emergencies.map((e) => (

          <div className="card" key={e.id}>

            <h3>{e.type}</h3>

            <p>
              <b>Location:</b> {e.location}
            </p>

            <p>
              <b>Status:</b> {e.status}
            </p>

            <p>
              <b>Assigned:</b> {e.assignedTo}
            </p>

            {

              e.type === "FIRE" && (

                <button
                  onClick={() =>
                    assignFireTeam(e.id)
                  }
                >
                  Assign Fire Team
                </button>
              )
            }

            {

              e.type === "CRIME" && (

                <button
                  onClick={() =>
                    assignPoliceTeam(e.id)
                  }
                >
                  Assign Police Team
                </button>
              )
            }

            {

              e.type === "MEDICAL" && (

                <button
                  onClick={() =>
                    assignAmbulanceTeam(e.id)
                  }
                >
                  Assign Ambulance
                </button>
              )
            }

          </div>
        ))
      }

    </div>
  );
}

export default AdminDashboard;