import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="hero-card">

          <p className="tagline">✨ Productivity Reimagined</p>

          <h1>
            Organize.
            <br />
            Focus.
            <br />
            Achieve.
          </h1>

          <p className="description">
            Manage your daily tasks with a beautiful and modern experience
            designed for productivity lovers.
          </p>

          <div className="hero-buttons">
            <button
  className="primary-btn"
  onClick={() => navigate("/register")}
>
  Get Started
</button>

            <button
  className="secondary-btn"
  onClick={() => navigate("/dashboard")}
>
  Explore Dashboard
</button>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;