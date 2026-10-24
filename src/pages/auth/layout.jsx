import { Outlet } from "react-router-dom";
import codingImage from "../../assets/coding.png";

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex items-center justify-center bg-coding md:w-1/2 md:h-screen p-4">
        <img src={codingImage} alt="Image of a programmer" />
      </div>
      <div className="flex items-center justify-center bg-navbar md:w-1/2 md:h-screen p-4">
        <div className="flex flex-col items-center justify-center text-center bg-white gap-2 rounded-lg p-4 shadow-lg md:w-2/3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
