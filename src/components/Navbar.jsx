import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();

const handleLogout = () => {

  localStorage.removeItem("token");

 window.location.href = "/login";

};
  return (
    <nav className="navbar">

      <div className="logo">
        <span>TaskFlow</span>
        <span className="sparkle">✨</span>
      </div>

      <div className="nav-links"> 
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={handleLogout}>Logout</button>

      </div>

    </nav>
    
  );
}

export default Navbar;