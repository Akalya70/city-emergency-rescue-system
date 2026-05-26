function Navbar({ setPage }) {
  return (
    <nav style={{background:"#222", color:"#fff", padding:"10px"}}>
      🚨 Rescue System
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("login")}>Logout</button>
    </nav>
  );
}

export default Navbar;