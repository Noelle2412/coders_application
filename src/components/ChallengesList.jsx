import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import { useTheme } from "../hooks/hooks";

const challenges = [
  {
    id: 145,
    title: "Two-sum",
    description: "...", // Not used here
    category: "Data structure",
    Difficulty: "Easy",
    status: "Completed",
    solutionRate: "45%",
    maintainer: "Goerge Harvy", // Not used here
  },
  {
    id: 146,
    title: "Fibonatci series",
    description: "...", // Not used here
    category: "Data structure",
    Difficulty: "Moderate",
    status: "Attempted",
    solutionRate: "45%",
    maintainer: "Goerge Harvy", // Not used here
  },
  {
    id: 147,
    title: "Skyline problem",
    description: "...", // Not used here
    category: "Data structure",
    Difficulty: "Moderate",
    status: "Pending",
    solutionRate: "45%",
    maintainer: "Goerge Harvy", // Not used here
  },
];

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}>
      {children}

      {visible && (
        <span className="absolute z-10 -left-2 bottom-2 p-1 border border-gray-400 rounded-md bg-gray-700 text-white text-xs ">
          {text}{" "}
        </span>
      )}
    </span>
  );
}

const ChallengesList = () => {
  const { isDark } = useTheme();
  return (
    <table className="text-center">
      <thead className="bg-navbar">
        <tr className="font-bold" key="Header">
          <td className="pt-3 pb-2 mx-2" key="Status Header">
            Status
          </td>
          <td className="pt-3 pb-2 mx-2" key="Title Header">
            Title
          </td>
          <td className="pt-3 pb-2 mx-2" key="Category Header">
            Category
          </td>
          <td className="pt-3 pb-2 mx-2" key="Difficulty Header">
            Difficulty
          </td>
          <td className="pt-3 pb-2 mx-2" key="Solution Header">
            Solution Rate
          </td>
        </tr>
      </thead>
      <tbody>
        {challenges.map((challenge) => {
          return (
            <tr className="border-b border-navbar" key={challenge.id}>
              <td
                className="pt-3 pb-2 flex justify-center"
                key={challenge.id + ": Status"}>
                <Tooltip text={challenge.status}>
                  {challenge.status === "Completed" ? (
                    <IconContext.Provider
                      value={{
                        style: {
                          verticalAlign: "middle",
                          color: isDark ? "lime" : "darkgreen",
                          fontSize: "1.5rem",
                        },
                      }}>
                      <BsCheck2Circle />
                    </IconContext.Provider>
                  ) : challenge.status === "Attempted" ? (
                    <IconContext.Provider
                      value={{
                        style: {
                          verticalAlign: "middle",
                          color: isDark ? "lightblue" : "blue",
                          fontSize: "1.5rem",
                        },
                      }}>
                      <LuFileSpreadsheet />
                    </IconContext.Provider>
                  ) : (
                    <IconContext.Provider
                      value={{
                        style: {
                          verticalAlign: "middle",
                          color: isDark ? "yellow" : "orange",
                          fontSize: "1.5rem",
                        },
                      }}>
                      <FaRegHourglass />
                    </IconContext.Provider>
                  )}
                </Tooltip>
              </td>
              <td className="pt-3 pb-2" key={challenge.id + ": Title"}>
                {challenge.title}
              </td>
              <td className="pt-3 pb-2" key={challenge.id + ": Category"}>
                {challenge.category}
              </td>
              <td className="pt-3 pb-2" key={challenge.id + ": Difficulty"}>
                {challenge.Difficulty}
              </td>
              <td className="pt-3 pb-2" key={challenge.id + ": Solution Rate"}>
                {challenge.solutionRate}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ChallengesList;
