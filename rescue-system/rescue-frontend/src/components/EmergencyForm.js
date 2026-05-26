import { useState } from "react";
import { createEmergency } from "../api/api";

function EmergencyForm({ refresh }) {
  const [type, setType] = useState("ACCIDENT");
  const [desc, setDesc] = useState("");

  const submit = () => {
    createEmergency({
      userId: localStorage.getItem("userId"),
      emergencyType: type,
      description: desc
    }).then(() => {
      alert("Emergency Sent!");
      refresh();
    });
  };

  return (
    <div>
      <h3>Create Emergency</h3>
      <select onChange={e=>setType(e.target.value)}>
        <option>ACCIDENT</option>
        <option>FIRE</option>
        <option>CRIME</option>
        <option>MEDICAL</option>
      </select>

      <textarea onChange={e=>setDesc(e.target.value)} />
      <button onClick={submit}>Send</button>
    </div>
  );
}

export default EmergencyForm;