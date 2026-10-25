import {
  getCompletedChallengesByLevel,
  getNumberOfChallengesByLevel,
} from "../api/evalChallenges.js";
import { useAuth } from "../hooks/hooks.js";

const CompletedChallenges = () => {
  const { user } = useAuth();
  const easy = Math.round(
    (100 * getCompletedChallengesByLevel(user, "Easy")) /
      getNumberOfChallengesByLevel("Easy"),
  );
  const easyWidth = Math.round((easy / 100) * 12);
  const moderate = Math.round(
    (100 * getCompletedChallengesByLevel(user, "Moderate")) /
      getNumberOfChallengesByLevel("Moderate"),
  );
  const moderateWidth = Math.round((moderate / 100) * 12);
  const hard = Math.round(
    (100 * getCompletedChallengesByLevel(user, "Hard")) /
      getNumberOfChallengesByLevel("Hard"),
  );
  const hardWidth = Math.round((hard / 100) * 12);

  return (
    <div className="shadow-2xl rounded-lg bg-app flex flex-col gap-4 p-4">
      <h2 className="text-2xl">Completed Challenges</h2>
      Easy:
      <div className="h-6 w-full bg-gray-500 flex flex-row justify-start rounded-full">
        <div
          className={`w-${easyWidth}/12 h-6 text-white rounded-full flex flex-col items-center pt-0.5 bg-green-500`}>
          {easy}%
        </div>
      </div>
      Moderate:{" "}
      <div className="h-6 w-full bg-gray-500 flex flex-row justify-start rounded-full">
        <div
          className={`w-${moderateWidth}/12 h-6 text-white rounded-full flex flex-col items-center pt-0.5 bg-yellow-500`}>
          {moderate}%
        </div>
      </div>
      Hard:
      <div className="h-6 w-full bg-gray-500 flex flex-row justify-start rounded-full">
        <div
          className={`w-${hardWidth}/12 h-6 text-white rounded-full flex flex-col items-center pt-0.5 bg-red-500`}>
          {hard}%
        </div>
      </div>
    </div>
  );
};

export default CompletedChallenges;
