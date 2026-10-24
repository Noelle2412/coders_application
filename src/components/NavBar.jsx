import { useAuth } from "../hooks/hooks";
import { useTheme } from "../contexts/themeContexts";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, isAuthenticated, signout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className="bg-navbar px-6 py-4 shadow-sm flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-plum tracking-tight">
        Coders App
      </Link>

      <button
        onClick={toggleTheme}
        className="px-3 py-3 text-xs rounded bg-coding text-white cursor-pointer">
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <nav className="flex items-center gap-4">
        <Link to="/" className="text-sm font-medium hover:text-plum transition">
          Home
        </Link>
        <Link
          to="/dashboard"
          className="text-sm font-medium hover:text-plum transition">
          Dashboard
        </Link>
        <Link
          to="/profile"
          className="text-sm font-medium hover:text-plum transition">
          Profile
        </Link>

        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">
              Welcome,{" "}
              <span className="font-semibold text-plum">{user.email}</span>
            </span>
            <button
              onClick={signout}
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition cursor-pointer">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/auth/sign_in"
              className="bg-[#3B82F7] hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md transition">
              Sign In
            </Link>
            <Link
              to="/auth/sign_up"
              className="bg-[#3B82F7] hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md transition">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
