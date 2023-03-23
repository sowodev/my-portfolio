import Me from "./text_panel/Me";
import MyStack from "./text_panel/MyStack";
import Learning from "./text_panel/Learning";

const TextPanel = function textPanel() {
  return (
    <div className="flex shadow-lg ring-1 ring-white-900/5 w-3/4 h-3/4">
      <Me />
      {/*       <MyStack />
      <Learning /> */}
    </div>
  );
};

export default TextPanel;
