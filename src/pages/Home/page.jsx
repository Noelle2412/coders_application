import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/hooks";
import CategoriesList from "../../components/CategoriesList";
import ChallengesList from "../../components/ChallengesList";

const Homepage = () => {
  const { user, isAuthenticated, signout } = useAuth();

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-4xl py-4">Challenges</h1>
      <p> Select Category </p>
      <CategoriesList />
      <ChallengesList />
    </div>
  );
};

export default Homepage;
