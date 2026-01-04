import { account as _account } from "../appwrite/index";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await _account.deleteSession("current"); // ends current session
      localStorage.removeItem("loginCreds"); // remove saved credentials
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500 transition"
    >
      Logout
    </button>
  );
}
