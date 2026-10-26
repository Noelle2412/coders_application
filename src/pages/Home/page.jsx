import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/hooks";

const Homepage = () => {
  const { user, isAuthenticated, signout } = useAuth();

  return (
    <div className="flex-1 flex flex-col">
      <header className="bg-navbar p-10 md:p-16 border-b border-gray-300">
        <h1 className="text-3xl md:text-4xl font-extrabold text-plum">
          {isAuthenticated
            ? `Welcome back, ${user.firstName}!`
            : "Welcome to Coders Application"}
        </h1>
      </header>

      <main className="bg-app p-8 md:p-16 flex-1 flex flex-col items-center justify-center">
        {isAuthenticated ? (
          <div className="space-y-4">
            <div className="pt-4 flex gap-3">
              <button
                onClick={signout}
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2.5 rounded-lg transition text-sm cursor-pointer">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="flex justify-center gap-4">
              <Link
                to="/auth/sign_in"
                className="bg-[#3B82F7] hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg transition text-sm">
                Sign In
              </Link>
              <Link
                to="/auth/sign_up"
                className="bg-[#3B82F7] hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg transition text-sm">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Homepage;
