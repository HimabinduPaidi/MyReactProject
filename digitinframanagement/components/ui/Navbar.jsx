import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-md flex justify-between items-center">
      {/* Site Name */}
      <h2 className="font-bold text-purple-700 text-lg italic">DigitInfra</h2>

      {/* Links */}
      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="text-purple-700 hover:text-purple-900 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="text-purple-700 border border-purple-300 px-3 py-1 rounded hover:bg-purple-200 hover:text-purple-900 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-purple-700 bg-white px-3 py-1 rounded hover:bg-purple-200 hover:text-purple-900 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

