import Split from "@uiw/react-split";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useState, useCallback } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

const Playground = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((val) => {
    setValue(val);
  }, []);
  const [language, setLanguage] = useState("javascript");
  const [fontSize, setFontSize] = useState(12);
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
                <label htmlFor="languge" className="text-xs">
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
            onChange={onChange}
          />
        </div>
        <div>Test Cases</div>
      </Split>
    </div>
  );
};

export default Playground;
