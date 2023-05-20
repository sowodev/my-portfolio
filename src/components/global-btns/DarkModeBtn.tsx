import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { GlobalContext } from "../commom/context/GlobalContext";

const DarkModeBtn: React.FC = function darkModeBtn() {
  const { set_dark } = useContext(GlobalContext);

  return (
    <button
      className="flex w-9 h-9 rounded shadow-md border border-neutral-500 justify-center items-center hover:bg-neutral-500 hover:scale-110 dark:border-gray-700 dark:bg-slate-800 dark:shadow-slate-600 dark:hover:bg-slate-700 transition ease-in-out duration-300"
      onClick={() => {
        set_dark.setIsDark(set_dark.is_dark === "light" ? "dark" : "light");
        localStorage.setItem(
          "theme",
          set_dark.is_dark === "light" ? "dark" : "light"
        );
      }}
    >
      {set_dark.is_dark === "dark" ? (
        <SunIcon className="w-5 h-5 stroke-slate-200" />
      ) : (
        <MoonIcon className="w-5 h-5 stroke-white" />
      )}
    </button>
  );
};

export default DarkModeBtn;