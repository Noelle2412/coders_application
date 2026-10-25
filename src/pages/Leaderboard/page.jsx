import LeaderboardData from "../../api/db/leaderboard.json";

const Leaderboard = () => {
  return (
    <div className="flex flex-col items-stretch gap-4 m-2">
      <h2 className="text-2xl p-8">Leaderboard</h2>
      <table className="shadow-lg text-center">
        <thead>
          <tr>
            <td className="py-4">Rank</td>
            <td>Name</td>
            <td>Score</td>
            <td>Solved Challenges</td>
          </tr>
        </thead>
        <tbody>
          {LeaderboardData.map((entry, index) => (
            <tr key={index} className="border-b-1 border-navbar">
              <td className="py-3">{entry.rank}</td>
              <td>
                {entry.first_name} {entry.last_name}
              </td>
              <td>{entry.score}</td>
              <td>{entry.solved_challenges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
