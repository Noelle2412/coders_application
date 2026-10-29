import { useAuth, useTheme } from "../hooks/hooks";
import { Link } from "react-router-dom";
import logo from "../assets/hero.png";
import { useState } from "react";
import { renderAvatar } from "../../utils/RenderAvatar";

const Navbar = () => {
  const { user, isAuthenticated, signout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-navbar px-6 py-4 shadow-sm flex items-center justify-between">
      <nav className="flex items-center gap-4">
        <Link
          to="/"
          className="text-2xl flex items-center gap-2 font-bold text-plum tracking-tight">
          <img src={logo} alt="Logo" width={50} />
          CodeCla
        </Link>

        <Link
          to="/workspace/1"
          className="text-sm font-medium hover:text-plum transition">
          Challenges
        </Link>
        <Link
          to="/leaderboard"
          className="text-sm font-medium hover:text-plum transition">
          Leaderboard
        </Link>
      </nav>

      <nav className="flex gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-3 text-xs rounded-lg bg-coding text-white cursor-pointer">
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {isAuthenticated ? (
          <div className="relative">
            <button
              className="flex flex-row gap-3 items-center hover:text-plum"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}>
              {renderAvatar(24, user)} {user.firstName} {user.lastName}
            </button>

            {isOpen && (
              <div className="bg-app flex flex-col absolute right-0 mt-0 rounded-md shadow-lg z-50">
                <button
                  className="hover:text-plum pt-2"
                  onClick={() => {
                    setIsOpen(false);
                  }}>
                  <Link to="/profile">Profile</Link>
                </button>
                <button
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                    signout();
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 transition rounded-b-md cursor-pointer">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
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

export default Navbar;
