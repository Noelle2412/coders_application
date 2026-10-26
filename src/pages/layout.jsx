import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  //This is not pretty yet, just to verify that the browser knows the user.

  return (
    <div className="min-h-screen flex flex-col bg-app">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
