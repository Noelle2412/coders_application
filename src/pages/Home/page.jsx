import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/hooks";

const Homepage = () => {
  const { user, isAuthenticated, signout } = useAuth();

  return (
    <div>
      <h1 className="text-4xl">Challenges</h1>
    </div>
  );
};

export default Homepage;
