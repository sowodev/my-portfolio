import Me from "./text_panel/Me";
import MyStack from "./text_panel/MyStack";
import Learning from "./text_panel/Learning";
import { HomeContext } from "./HomeContext";
import { useContext } from "react";
import me_img from "/src/assets/imgs/me.png";
import tech_stack from "/src/assets/imgs/mystack.png";
import learning_img from "/src/assets/imgs/learning.png";

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
    <div className="mt-16 flex h-4/5 w-3/4 flex-col items-center justify-center  rounded-lg bg-gradient-to-tl from-blue-400 to-sky-400 shadow-lg shadow-sky-300 ring-1 ring-slate-900/5 dark:from-sky-700 dark:to-blue-950 dark:shadow-sky-800">
      <div className="flex h-[10%] w-full items-center justify-center">
        <div className="flex h-[80%] w-[80%] flex-row items-center justify-center gap-4 rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
          <div
            className={
              context_object.text_to_show === "Me"
                ? "ml-[5%] flex h-[80%] basis-1/3 items-center justify-center rounded bg-white outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400"
                : "ml-[5%] flex h-[80%] basis-1/3 items-center justify-center rounded"
            }
          >
            <div className="h-5 w-9">
              <img src={me_img} alt="Me" />
            </div>
          </div>

          <div
            className={
              context_object.text_to_show === "MyStack"
                ? "flex h-[80%] basis-1/3 items-center justify-center rounded bg-white outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400"
                : "flex h-[80%] basis-1/3 items-center justify-center rounded"
            }
          >
            <div className="h-5 w-24">
              <img src={tech_stack} alt="MyStack" />
            </div>
          </div>

          <div
            className={
              context_object.text_to_show === "Learning"
                ? "mr-[5%] flex h-[80%] basis-1/3 items-center justify-center rounded bg-white outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400"
                : "mr-[5%] flex h-[80%] basis-1/3 items-center justify-center rounded"
            }
          >
            <div className="h-5 w-28">
              <img src={learning_img} alt="Learning" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[85%] w-[95%] rounded-lg">{component_to_show}</div>
    </div>
  );
};

export default TextPanel;
