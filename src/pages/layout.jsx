import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  //This is not pretty yet, just to verify that the browser knows the user.

  return (
    <div className="min-h-screen flex flex-col bg-app">
      <NavBar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
