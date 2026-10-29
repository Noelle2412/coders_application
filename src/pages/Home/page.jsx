import { Link } from "react-router-dom";
import CategoriesList from "../../components/CategoriesList";
import ChallengesList from "../../components/ChallengesList";
import TrendingCategoriesBox from "../../components/TrendingCategoriesBox";
import TopKCodersList from "../../components/TopKCodersList";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-2 p-4 md:flex-row">
      <div className="flex flex-col gap-4 md:flex-2">
        <h1 className="text-4xl pt-4">Challenges</h1>
        <p> Select Category </p>
        <CategoriesList />
        <ChallengesList />
      </div>
      <div className="flex flex-col md:flex-1">
        <TrendingCategoriesBox />
        <TopKCodersList />
      </div>
    </div>
  );
};

export default Homepage;
