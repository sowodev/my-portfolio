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
    <div className="flex flex-col w-3/4 h-4/5 bg-gradient-to-tl from-[#45bff8] to-[#328bf0] shadow-lg ring-1 ring-slate-900/5 justify-center items-center rounded-lg">
      <div className="flex w-full h-[10%] justify-center items-center">
        <div className="flex flex-row w-[70%] h-[80%] bg-[#ffffff3f] border border-[#f5f5f538] rounded-lg justify-center items-center gap-4">
          <div className="flex basis-1/3 h-[80%] bg-white ring-2 ring-white outline-none ring-opacity-60 ring-offset-2 ring-offset-blue-300 justify-center items-center rounded-lg ml-[5%]">
            <div className="w-9 h-5">
              <img src="/src/assets/imgs/me.png" alt="Me" />
            </div>
          </div>

          <div className="flex basis-1/3 h-[80%] justify-center items-center rounded-lg">
            <div className="w-24 h-5">
              <img src="/src/assets/imgs/mystack.png" alt="MyStack" />
            </div>
          </div>

          <div className="flex basis-1/3 h-[80%] justify-center items-center rounded-lg mr-[5%]">
            <div className="w-28 h-5">
              <img src="/src/assets/imgs/learning.png" alt="Learning" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] h-[85%] bg-white rounded-lg">
        {component_to_show}
      </div>
    </div>
  );
};

export default TextPanel;
