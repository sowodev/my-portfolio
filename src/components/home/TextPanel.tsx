import Me from "./text_panel/Me";
import MyStack from "./text_panel/MyStack";
import Learning from "./text_panel/Learning";
import { HomeContext } from "./HomeContext";
import { useContext } from "react";

const TextPanel = function textPanel() {
  const context_object = useContext(HomeContext);
  let component_to_show = <Me />;

  if (context_object.text_to_show === "Me") {
    component_to_show = <Me />;
  } else if (context_object.text_to_show === "MyStack") {
    component_to_show = <MyStack />;
  } else if (context_object.text_to_show === "Learning") {
    component_to_show = <Learning />;
  }

  return (
    <div className="flex shadow-lg ring-1 ring-slate-900/5 w-3/4 h-3/4">
      {component_to_show}
    </div>
  );
};

export default TextPanel;
