import { Link } from "react-router-dom";
import { logout } from "../utils/logout";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      {/* Left side: Logo or title */}
      <div className="text-lg font-bold">Govt School Digital Infra</div>

      {/* Right side: Navigation links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link to="/login" className="hover:text-gray-300 transition">
          Login
        </Link>
        <Link to="/register" className="hover:text-gray-300 transition">
          Register
        </Link>
        
      </div>
    </nav>
  );
}





