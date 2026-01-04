import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SchoolDashboard from "./pages/dashboards/SchoolDashboard";
import DistrictDashboard from "./pages/dashboards/DistrictDashboard";
import TechnicianDashboard from "./pages/dashboards/TechnicianDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/school-dashboard" element={<SchoolDashboard />} />
        <Route path="/district-dashboard" element={<DistrictDashboard />} />
        <Route path="/technician-dashboard" element={<TechnicianDashboard />} />
      </Routes>
    </>
  );
}

export default App;




