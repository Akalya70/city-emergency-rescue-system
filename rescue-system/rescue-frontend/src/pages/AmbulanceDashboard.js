import React, {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  getEmergencies,
  updateEmergency
} from "../services/api";

function AmbulanceDashboard() {

  const navigate = useNavigate();

  const [medicalCases, setMedicalCases] = useState([]);

  // LOAD AMBULANCE CASES

  useEffect(() => {

    loadMedicalCases();

  }, []);

  const loadMedicalCases = async () => {

    const data = await getEmergencies();

    // FILTER AMBULANCE CASES

    const medicalOnly = data.filter(

      (e) =>

        e.assignedTo ===
        "AMBULANCE_SERVICE"
    );

    setMedicalCases(medicalOnly);
  };

  // ACCEPT EMERGENCY

  const acceptEmergency = async (id) => {

    await updateEmergency(

      id,

      "IN_PROGRESS",

      "AMBULANCE_SERVICE"
    );

    alert(
      "🚑 Ambulance Team Accepted Mission"
    );

    loadMedicalCases();
  };

  // COMPLETE EMERGENCY

  const completeEmergency = async (id) => {

    await updateEmergency(

      id,

      "COMPLETED",

      "AMBULANCE_SERVICE"
    );

    alert(
      "✅ Patient Rescue Completed"
    );

    loadMedicalCases();
  };

  // LOGOUT

  const logout = () => {

    alert("Logged Out");

    navigate("/");
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

        <h2>
          🚑 AMBULANCE DASHBOARD
        </h2>

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

      {/* EMERGENCY LIST */}

      {

        medicalCases.length === 0 ? (

          <div className="card">

            <h3>
              No Medical Emergencies
            </h3>

          </div>

        ) : (

          medicalCases.map((e) => (

            <div
              className="card"
              key={e.id}
            >

              <h3>
                🚑 {e.type}
              </h3>

              <p>
                <b>Location:</b>
                {" "}
                {e.location}
              </p>

              <p>
                <b>Description:</b>
                {" "}
                {e.description}
              </p>

              <p>
                <b>Status:</b>
                {" "}
                {e.status}
              </p>

              <p>
                <b>Assigned To:</b>
                {" "}
                {e.assignedTo}
              </p>

              {/* ACCEPT */}

              {

                e.status === "ASSIGNED" && (

                  <button
                    onClick={() =>
                      acceptEmergency(e.id)
                    }
                  >

                    Accept Mission

                  </button>
                )
              }

              {/* COMPLETE */}

              {

                e.status ===
                "IN_PROGRESS" && (

                  <button
                    onClick={() =>
                      completeEmergency(e.id)
                    }
                    style={{
                      marginTop: "10px"
                    }}
                  >

                    Complete Mission

                  </button>
                )
              }

              {/* STATUS */}

              {

                e.status ===
                "ASSIGNED" && (

                  <p
                    style={{
                      color: "yellow"
                    }}
                  >

                    ⏳ Waiting For Ambulance Team

                  </p>
                )
              }

              {

                e.status ===
                "IN_PROGRESS" && (

                  <p
                    style={{
                      color: "orange"
                    }}
                  >

                    🚑 Ambulance On The Way

                  </p>
                )
              }

              {

                e.status ===
                "COMPLETED" && (

                  <p
                    style={{
                      color: "lightgreen"
                    }}
                  >

                    ✅ Patient Rescued Successfully

                  </p>
                )
              }

            </div>
          ))
        )
      }

    </div>
  );
}

export default AmbulanceDashboard;