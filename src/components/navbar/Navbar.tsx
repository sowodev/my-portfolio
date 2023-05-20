import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavButtons from "./NavButtons";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { GlobalContext } from "../commom/context/GlobalContext";

const Navbar = function () {
  const { set_sidebar } = useContext(GlobalContext);

  return (
    <nav className="flex w-full h-[4.5rem] bg-gradient-to-t from-[#666666] to-[#444444] dark:from-slate-700 dark:to-slate-900">
      <div className="flex w-full h-full items-center justify-around">
        <div className="flex flex-row w-fit h-full gap-8 justify-center items-center">
          <button
            className="w-fit h-fit"
            onClick={() => set_sidebar.setOpenSidebar((c) => !c)}
          >
            <Bars3Icon className="w-7 h-7 stroke-white rounded hover:bg-slate-100 hover:bg-opacity-10" />
          </button>
          <Logo />
        </div>
        <SearchBar />
        <NavButtons />
      </div>
    </nav>
  );
};

export default Navbar;
