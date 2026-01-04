import { useNavigate } from "react-router-dom";

export default function TechnicianDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Appwrite logout
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">Technician Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
        >
          Logout
        </button>
      </header>

      {/* Assigned Issues */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-xl font-bold mb-4">Assigned Issues</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Issue ID</th>
              <th className="border p-2">School</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">SCH-001</td>
              <td className="border p-2">Govt High School A</td>
              <td className="border p-2 text-yellow-600 font-semibold">In Progress</td>
              <td className="border p-2">Checking projector</td>
            </tr>
            <tr>
              <td className="border p-2">SCH-003</td>
              <td className="border p-2">Govt High School C</td>
              <td className="border p-2 text-red-600 font-semibold">Open</td>
              <td className="border p-2">Internet down</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mark Issue Resolved */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-4">Update Issue Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="border p-2 rounded">
            <option>Select Issue</option>
            <option>SCH-001</option>
            <option>SCH-003</option>
          </select>
          <select className="border p-2 rounded">
            <option>Mark Status</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          <button className="bg-green-600 text-white py-2 rounded hover:bg-green-500 col-span-2">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
