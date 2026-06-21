import { HashRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/ProtectRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
      </Routes>
    </HashRouter>
  );
}

export default App;