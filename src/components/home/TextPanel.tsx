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
    <div className="mt-16 flex h-4/5 w-3/4 flex-col items-center justify-center  rounded-lg bg-gradient-to-tl from-blue-400 to-sky-400 shadow-lg shadow-sky-300 ring-1 ring-slate-900/5 dark:from-sky-700 dark:to-blue-950 dark:shadow-sky-800">
      <div className="flex h-[10%] w-full items-center justify-center">
        <div className="flex h-[80%] w-[80%] flex-row items-center justify-center gap-4 rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
          <button
            className={
              context_object.text_to_show === "Me"
                ? "ml-[5%] flex h-[80%] basis-1/3 items-center justify-center rounded bg-white outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400"
                : "ml-[5%] flex h-[80%] basis-1/3 items-center justify-center rounded hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-10"
            }
            onClick={() => context_object.setTextToShow("Me")}
            disabled={context_object.text_to_show === "Me"}
          >
            <div className="h-5 w-9">
              <img src="/imgs/me.png" alt="Me" />
            </div>
          </button>

          <button
            className={
              context_object.text_to_show === "MyStack"
                ? "flex h-[80%] basis-1/3 items-center justify-center rounded bg-white outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400"
                : "flex h-[80%] basis-1/3 items-center justify-center rounded hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-10"
            }
            onClick={() => context_object.setTextToShow("MyStack")}
            disabled={context_object.text_to_show === "MyStack"}
          >
            <div className="h-5 w-24">
              <img src="/imgs/mystack.png" alt="MyStack" />
            </div>
          </button>

          <button
            className={
              context_object.text_to_show === "Learning"
                ? "mr-[5%] flex h-[80%] basis-1/3 items-center justify-center rounded bg-white outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400"
                : "mr-[5%] flex h-[80%] basis-1/3 items-center justify-center rounded hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-10"
            }
            onClick={() => context_object.setTextToShow("Learning")}
            disabled={context_object.text_to_show === "Learning"}
          >
            <div className="h-5 w-28">
              <img src="/imgs/learning.png" alt="Learning" />
            </div>
          </button>
        </div>
      </div>
      <div className="h-[85%] w-[95%] rounded-lg">{component_to_show}</div>
    </div>
  );
};

export default TextPanel;
