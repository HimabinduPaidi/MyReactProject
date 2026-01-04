import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    schoolName: "",
    schoolCode: "",
    mandal: "",
    district: "",
    state: "",
    districtName: "",
    officeLocation: "",
    technicianType: "",
    workingDistrict: "",
    workingMandal: "",
    availableZones: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const generateRegistrationId = (role) => {
    const year = new Date().getFullYear();
    const random = Math.floor(10000 + Math.random() * 90000);
    const prefix =
      role === "SCHOOL" ? "GOV-SCH" :
      role === "DISTRICT_ADMIN" ? "GOV-DIST" :
      "GOV-TECH";
    return `${prefix}-${year}-${random}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const regId = generateRegistrationId(role);
    setRegistrationId(regId);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-8 shadow-lg rounded text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Registration Successful ✅</h2>
          <p>Your Registration ID:</p>
          <div className="border border-dashed p-3 font-semibold text-blue-900">{registrationId}</div>
          <p className="text-red-600 text-sm mt-4">⚠ Save this ID. It will be shown only once.</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-6 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded max-w-2xl w-full"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Government User Registration
        </h2>

        {/* Common Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Full Name" className="border p-2 rounded"/>
          <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" type="email" className="border p-2 rounded"/>
          <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number" className="border p-2 rounded"/>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required className="border p-2 rounded">
            <option value="">Select Role</option>
            <option value="SCHOOL">School Principal</option>
            <option value="DISTRICT_ADMIN">District Administrator</option>
            <option value="TECHNICIAN">Technician</option>
          </select>
          <input name="password" value={form.password} onChange={handleChange} type="password" required placeholder="Password" className="border p-2 rounded"/>
          <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" required placeholder="Confirm Password" className="border p-2 rounded"/>
        </div>

        {/* Role-Based Fields */}
        {role === "SCHOOL" && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">School Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="schoolName" value={form.schoolName} onChange={handleChange} placeholder="School Name" required className="border p-2 rounded"/>
              <input name="schoolCode" value={form.schoolCode} onChange={handleChange} placeholder="School Code" className="border p-2 rounded"/>
              <input name="mandal" value={form.mandal} onChange={handleChange} placeholder="Mandal" required className="border p-2 rounded"/>
              <input name="district" value={form.district} onChange={handleChange} placeholder="District" required className="border p-2 rounded"/>
              <input name="state" value={form.state} onChange={handleChange} placeholder="State" required className="border p-2 rounded"/>
            </div>
          </div>
        )}

        {role === "DISTRICT_ADMIN" && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">District Admin Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="districtName" value={form.districtName} onChange={handleChange} placeholder="District Name" required className="border p-2 rounded"/>
              <input name="state" value={form.state} onChange={handleChange} placeholder="State" required className="border p-2 rounded"/>
              <input name="officeLocation" value={form.officeLocation} onChange={handleChange} placeholder="Office Location" className="border p-2 rounded"/>
            </div>
          </div>
        )}

        {role === "TECHNICIAN" && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Technician Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="workingDistrict" value={form.workingDistrict} onChange={handleChange} placeholder="Working District" required className="border p-2 rounded"/>
              <input name="workingMandal" value={form.workingMandal} onChange={handleChange} placeholder="Working Mandal" className="border p-2 rounded"/>
              <select name="technicianType" value={form.technicianType} onChange={handleChange} required className="border p-2 rounded">
                <option value="">Technician Type</option>
                <option value="Hardware">Hardware</option>
                <option value="Network">Network</option>
                <option value="Software">Software</option>
              </select>
              <input name="availableZones" value={form.availableZones} onChange={handleChange} placeholder="Available Zones" className="border p-2 rounded"/>
            </div>
          </div>
        )}

        <button type="submit" className="mt-8 w-full bg-blue-900 text-white py-2 rounded text-lg hover:bg-blue-800 transition">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
