import { useAuth } from "../hooks/hooks";
import {
  getNumberOfChallengesByLevel,
  getCompletedChallengesByLevel,
} from "../api/evalChallenges.js";

const ProgressBar = ({ label, percent, color }) => (
  <>
    {label}:
    <div className="h-6 w-full bg-gray-500 rounded-full overflow-hidden">
      <div
        className={`h-6 text-white text-center pt-0.5 px-0.5 rounded-full ${color}`}
        style={{ width: `${percent}%` }}>
        {percent}%
      </div>
    </div>
  </>
);

const percentOf = (user, level) => {
  const total = getNumberOfChallengesByLevel(level);
  return total
    ? Math.round((100 * getCompletedChallengesByLevel(user, level)) / total)
    : 0;
};

const CompletedChallenges = () => {
  const { user } = useAuth();

  return (
    <div className="shadow-2xl rounded-lg bg-app flex flex-col gap-4 p-4">
      <h2 className="text-2xl text-center">Completed Challenges</h2>
      <ProgressBar
        label="Easy"
        percent={percentOf(user, "Easy")}
        color="bg-green-500"
      />
      <ProgressBar
        label="Moderate"
        percent={percentOf(user, "Moderate")}
        color="bg-yellow-500"
      />
      <ProgressBar
        label="Hard"
        percent={percentOf(user, "Hard")}
        color="bg-red-500"
      />
    </div>
  );
};

export default CompletedChallenges;
