import Split from "@uiw/react-split";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useState, useCallback } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { useTheme } from "../hooks/hooks";

let tests = [
  {
    id: 1,
    input: {}, // Not used here
    inputText: `[1, 2, 3]`,
    output: {}, // Not used here
    outputText: `6`,
  },
  {
    id: "test_2",
    input: {}, // Not used here
    inputText: `[2, 3]`,
    output: {}, // Not used here
    outputText: `5`,
  },
];

const Playground = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((val) => {
    setValue(val);
  }, []);
  const [language, setLanguage] = useState("javascript");
  const [fontSize, setFontSize] = useState(12);
  const [selectedCase, setSelectedCase] = useState(0);
  const { isDark } = useTheme();
  return (
    <div className="min-w-100">
      <Split mode="vertical" visible={true}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-end gap-2">
            <div className="flex flex-col">
              <label htmlFor="fontSize" className="text-xs top-0">
                Font size
              </label>
              <select
                onChange={(e) => setFontSize(Number(e.target.value))}
                name="fontSize"
                id="fontSize"
                className="py-1 px-3 border border-gray-500 rounded-md">
                <option className="bg-app" value="12">
                  12
                </option>
                <option className="bg-app" value="14">
                  14
                </option>
                <option className="bg-app" value="16">
                  16
                </option>
                <option className="bg-app" value="18">
                  18
                </option>
                <option className="bg-app" value="20">
                  20
                </option>
              </select>
            </div>
            <form className="flex flex-row justify-end">
              <div className="flex flex-col gap-0">
                <label htmlFor="language" className="text-xs">
                  Language
                </label>
                <select
                  onChange={(e) => setLanguage(e.target.value)}
                  name="language"
                  id="language"
                  className="py-1 px-3 border border-gray-500 rounded-md">
                  <option className="bg-app" value="javascript">
                    javascript
                  </option>
                  <option className="bg-app" value="python">
                    python
                  </option>
                </select>
              </div>
            </form>
          </div>
          <ReactCodeMirror
            value={value}
            height="200px"
            extensions={
              language === "javascript"
                ? [javascript({ jsx: true })]
                : [python()]
            }
            style={{ fontSize: fontSize }}
            theme={isDark ? "dark" : "light"}
            onChange={onChange}
          />
        </div>
        <div className="mt-4 ml-4">
          <h3 className="text-sm font-medium w-fit border-b-2 border-gray-800 pb-1">
            Testcases
          </h3>
          <ul className="flex flex-row gap-4 mt-6">
            {tests.map((test, index) => (
              <li key={test.id}>
                <button
                  onClick={() => setSelectedCase(index)}
                  className={`text-white p-2 pb-1 rounded-md ${selectedCase === index ? "bg-plum text-white" : "bg-navbar text-black"}`}
                  aria-pressed={selectedCase === index}>
                  Case {index + 1}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 my-6">
            <div>Input:</div>
            <div className="bg-navbar w-full rounded-md p-2">
              {tests[selectedCase].inputText}
            </div>
            <div className="text-sm">Expected output:</div>
            <div className="bg-navbar w-full rounded-md p-2">
              {tests[selectedCase].outputText}
            </div>
          </div>

          <button
            className="bg-navbar p-2 pb-1 absolute right-4 rounded-md"
            onClick={() => {}}>
            Submit
          </button>
        </div>
      </Split>
    </div>
  );
};

export default Playground;
