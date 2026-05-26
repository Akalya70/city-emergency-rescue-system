import React, {
  useEffect,
  useState
} from "react";

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

  // ASSIGN FIRE TEAM

  const assignFire = async (id) => {

    await updateEmergency(
      id,
      "ASSIGNED",
      "FIRE_TEAM"
    );

    alert("🔥 Fire Team Assigned");

    loadEmergencies();
  };

  // ASSIGN POLICE TEAM

  const assignPolice = async (id) => {

    await updateEmergency(
      id,
      "ASSIGNED",
      "POLICE_TEAM"
    );

    alert("🚓 Police Team Assigned");

    loadEmergencies();
  };

  // ASSIGN AMBULANCE TEAM

  const assignAmbulance = async (id) => {

    await updateEmergency(
      id,
      "ASSIGNED",
      "AMBULANCE_TEAM"
    );

    alert("🚑 Ambulance Team Assigned");

    loadEmergencies();
  };

  // MARK AS COMPLETED

  const completeEmergency = async (id, team) => {

    await updateEmergency(
      id,
      "COMPLETED",
      team
    );

    alert("✅ Emergency Completed");

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
              <b>Assigned Team:</b>
              {" "}
              {

                e.assignedTo
                  ? e.assignedTo
                  : "NOT ASSIGNED"
              }
            </p>

            {/* FIRE */}

            {

              e.type === "FIRE" &&

              e.status === "PENDING" && (

                <button
                  onClick={() =>
                    assignFire(e.id)
                  }
                >
                  Assign Fire Team
                </button>
              )
            }

            {/* POLICE */}

            {

              e.type === "CRIME" &&

              e.status === "PENDING" && (

                <button
                  onClick={() =>
                    assignPolice(e.id)
                  }
                >
                  Assign Police Team
                </button>
              )
            }

            {/* AMBULANCE */}

            {

              e.type === "MEDICAL" &&

              e.status === "PENDING" && (

                <button
                  onClick={() =>
                    assignAmbulance(e.id)
                  }
                >
                  Assign Ambulance
                </button>
              )
            }

            {/* COMPLETED BUTTON */}

            {

              e.status === "ASSIGNED" && (

                <>

                  <br /><br />

                  <button
                    onClick={() =>
                      completeEmergency(
                        e.id,
                        e.assignedTo
                      )
                    }
                  >
                    Mark Completed
                  </button>

                </>
              )
            }

            {/* STATUS COLORS */}

            {

              e.status === "PENDING" && (

                <p style={{ color: "yellow" }}>
                  ⏳ Waiting For Team Assignment
                </p>
              )
            }

            {

              e.status === "ASSIGNED" && (

                <p style={{ color: "orange" }}>
                  🚑 Rescue Team Working
                </p>
              )
            }

            {

              e.status === "COMPLETED" && (

                <p style={{ color: "lightgreen" }}>
                  ✅ Emergency Resolved
                </p>
              )
            }

          </div>
        ))
      }

    </div>
  );
}

export default AdminDashboard;