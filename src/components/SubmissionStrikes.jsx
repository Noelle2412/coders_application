import HeatMap from "@uiw/react-heat-map";
import { useTheme } from "../contexts/themeContexts";
import { useAuth } from "../hooks/hooks";
const dates = [
  { date: "2026/03/12", count: 2 },
  { date: "2026/04/26", count: 25 },
  { date: "2026/06/06", count: 12 },
  { date: "2026/07/12", count: 34 },
  { date: "2026/08/23", count: 7 },
];

const pannelColor = {
  dark: {
    0: "#fadfc3",
    2: "#fcca95",
    4: "#fcbc77",
    10: "#ffaf59",
    20: "#fc9b32",
    30: "#fa5902",
  },
  light: {
    0: "#b89ffc",
    2: "#916afc",
    4: "#7e52f7",
    10: "#6f3cfa",
    20: "#5a1fff",
    30: "#2f03ad",
  },
};

const SubmissionStrikes = () => {
  const { isDark } = useTheme();

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);

  return (
    <div className="shadow-2xl rounded-lg bg-app p-4">
      <h2 className="text-2xl text-center">Your coding strikes</h2>
      <HeatMap
        value={dates}
        width={570}
        rectSize={8}
        startDate={startDate}
        endDate={new Date()}
        style={{ color: isDark ? "#fff" : "#000" }}
        panelColors={isDark ? pannelColor.dark : pannelColor.light}
      />
    </div>
  );
};

export default SubmissionStrikes;
