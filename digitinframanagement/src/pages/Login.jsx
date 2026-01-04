import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [registrationId, setRegistrationId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Simulated user data for demonstration
  const fakeUsers = [
    { regId: "GOV-SCH-2026-12345", password: "school123", role: "SCHOOL" },
    { regId: "GOV-DIST-2026-54321", password: "dist123", role: "DISTRICT_ADMIN" },
    { regId: "GOV-TECH-2026-67890", password: "tech123", role: "TECHNICIAN" },
  ];

  // Auto-fill credentials from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("loginCreds");
    if (saved) {
      const { regId, pwd } = JSON.parse(saved);
      setRegistrationId(regId);
      setPassword(pwd);
      handleLoginAuto(regId, pwd);
    }
  }, []);

  const handleLoginAuto = (regId, pwd) => {
    const user = fakeUsers.find(u => u.regId === regId && u.password === pwd);
    if (user) {
      redirectDashboard(user.role);
    }
  };

  const handleLogin = () => {
    const user = fakeUsers.find(u => u.regId === registrationId && u.password === password);
    if (!user) {
      alert("Invalid Registration ID or Password");
      return;
    }

    // Show popup only if not already saved
    const saved = localStorage.getItem("loginCreds");
    if (!saved) setShowPopup(true);

    redirectDashboard(user.role);
  };

  const redirectDashboard = (role) => {
    if (role === "SCHOOL") navigate("/school-dashboard");
    else if (role === "DISTRICT_ADMIN") navigate("/district-dashboard");
    else navigate("/technician-dashboard");
  };

  const saveCredentials = () => {
    localStorage.setItem("loginCreds", JSON.stringify({ regId: registrationId, pwd: password }));
    setShowPopup(false);
  };

  const declineSave = () => setShowPopup(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 relative">
      <div className="bg-white p-8 shadow-lg rounded w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Login</h2>

        <input
          type="text"
          placeholder="Registration ID"
          value={registrationId}
          onChange={e => setRegistrationId(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2 mb-6 rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Login
        </button>

        {showPopup && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow max-w-sm w-full text-center">
              <h3 className="font-semibold mb-2">Save Login Details?</h3>
              <p className="mb-4 text-gray-700">Do you want to save your Registration ID and Password for next time?</p>
              <div className="flex justify-around gap-4">
                <button onClick={saveCredentials} className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Yes</button>
                <button onClick={declineSave} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition">No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
