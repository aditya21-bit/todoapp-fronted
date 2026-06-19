import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Register.css";
import API from "../api/api";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post("/auth/register", {
        name,
        email,
        password
      });

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {

      alert("Registration Failed");

    }

  };

  return (
    <>
      <Navbar />

      <div className="register-page">

        <div className="register-card">

          <h1>Create Account ✨</h1>

          <p>Start organizing your life with TaskFlow.</p>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              Create Account
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Register;