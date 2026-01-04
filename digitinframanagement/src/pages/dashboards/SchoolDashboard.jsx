import { useNavigate } from "react-router-dom";

export default function SchoolDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Add Appwrite logout
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">School Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
        >
          Logout
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-2">Total Digital Assets</h3>
          <p className="text-2xl font-bold">45</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-2">Open Issues</h3>
          <p className="text-2xl font-bold text-red-600">3</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-2">Resolved Issues</h3>
          <p className="text-2xl font-bold text-green-600">12</p>
        </div>
      </div>

      {/* Issue Table */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-4">Reported Issues</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Issue ID</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Assigned Technician</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">SCH-001</td>
              <td className="border p-2">Projector not working</td>
              <td className="border p-2 text-red-600 font-semibold">Open</td>
              <td className="border p-2">John Doe</td>
            </tr>
            <tr>
              <td className="border p-2">SCH-002</td>
              <td className="border p-2">Internet issue</td>
              <td className="border p-2 text-green-600 font-semibold">Resolved</td>
              <td className="border p-2">Jane Smith</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
