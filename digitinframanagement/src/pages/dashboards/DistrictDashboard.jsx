import { useNavigate } from "react-router-dom";

export default function DistrictDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Appwrite logout
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">District Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
        >
          Logout
        </button>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-2">Schools in District</h3>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-2">Technicians Assigned</h3>
          <p className="text-2xl font-bold">10</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-2">Pending Assignments</h3>
          <p className="text-2xl font-bold text-red-600">5</p>
        </div>
      </div>

      {/* Technician Assignment */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-4">Assign Technician</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="border p-2 rounded">
            <option>Select Technician</option>
            <option>John Doe</option>
            <option>Jane Smith</option>
          </select>
          <select className="border p-2 rounded">
            <option>Select School</option>
            <option>Govt High School A</option>
            <option>Govt High School B</option>
          </select>
          <button className="bg-blue-900 text-white py-2 rounded hover:bg-blue-800 col-span-2">
            Assign
          </button>
        </div>
      </div>
    </div>
  );
}
