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

function PoliceDashboard() {

  const navigate = useNavigate();

  const [crimeCases, setCrimeCases] = useState([]);

  // LOAD EMERGENCIES

  useEffect(() => {

    loadCrimeCases();

  }, []);

  const loadCrimeCases = async () => {

    const data = await getEmergencies();

    // FILTER POLICE CASES

    const policeOnly = data.filter(

      (e) =>

        e.assignedTo === "POLICE_SERVICE"
    );

    setCrimeCases(policeOnly);
  };

  // ACCEPT CASE

  const acceptEmergency = async (id) => {

    await updateEmergency(

      id,

      "IN_PROGRESS",

      "POLICE_SERVICE"
    );

    alert(
      "🚓 Police Team Accepted Mission"
    );

    loadCrimeCases();
  };

  // COMPLETE CASE

  const completeEmergency = async (id) => {

    await updateEmergency(

      id,

      "COMPLETED",

      "POLICE_SERVICE"
    );

    alert(
      "✅ Case Completed"
    );

    loadCrimeCases();
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

        <h2>👮 POLICE DASHBOARD</h2>

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

      {/* CASES */}

      {

        crimeCases.length === 0 ? (

          <div className="card">

            <h3>
              No Crime Alerts
            </h3>

          </div>

        ) : (

          crimeCases.map((e) => (

            <div
              className="card"
              key={e.id}
            >

              <h3>
                🚓 {e.type}
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

                e.status === "IN_PROGRESS" && (

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

                e.status === "ASSIGNED" && (

                  <p
                    style={{
                      color: "yellow"
                    }}
                  >

                    ⏳ Waiting For Police Team

                  </p>
                )
              }

              {

                e.status === "IN_PROGRESS" && (

                  <p
                    style={{
                      color: "orange"
                    }}
                  >

                    🚓 Police Team On Duty

                  </p>
                )
              }

              {

                e.status === "COMPLETED" && (

                  <p
                    style={{
                      color: "lightgreen"
                    }}
                  >

                    ✅ Case Resolved

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

export default PoliceDashboard;