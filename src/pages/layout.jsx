import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/hooks";

const RootLayout = () => {
  const { user, isAuthenticated, signout } = useAuth();

  //This is not pretty yet, just to verify that the browser knows the user.

  return (
    <div className="min-h-screen flex flex-col bg-app">
      <header className="bg-navbar px-6 py-4 shadow-sm flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-plum tracking-tight">
          Coders App
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-medium hover:text-plum transition">
            Home
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
                className="text-sm font-medium text-gray-700 hover:text-plum px-3 py-2 rounded-md transition">
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

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
