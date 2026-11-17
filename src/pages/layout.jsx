import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const RootLayout = () => {
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
