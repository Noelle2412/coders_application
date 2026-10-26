import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "../contexts/themeContexts";

const ChallengeDescription = ({ challenge }) => {
  const { isDark } = useTheme();
  const style = isDark
    ? { backgroundColor: "#4322C9", color: "#fff" }
    : { backgroundColor: "#E5E7EB", color: "#000" };
  return (
    <div>
      <h2 className="text-4xl p-2 pb-8">{challenge.title}</h2>
      <MarkdownPreview style={style} source={challenge.description} />
    </div>
  );
};

export default ChallengeDescription;
