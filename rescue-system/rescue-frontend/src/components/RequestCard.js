function RequestCard({ req }) {
  return (
    <div style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
      <b>{req.emergencyType}</b>
      <p>Status: {req.status}</p>
    </div>
  );
}

export default RequestCard;