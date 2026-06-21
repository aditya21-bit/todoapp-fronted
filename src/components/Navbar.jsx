import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>TaskFlow</span>
        <span className="sparkle">✨</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

    </nav>
  );
}

export default Navbar;