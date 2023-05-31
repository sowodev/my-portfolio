import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavButtons from "./NavButtons";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { GlobalContext } from "../commom/context/GlobalContext";
import LoginBtn from "./btns/LoginBtn";

const Navbar = function () {
  const { set_sidebar } = useContext(GlobalContext);

  return (
    <nav className="flex h-[4.5rem] w-full bg-gradient-to-t from-[#666666] to-[#444444] dark:from-slate-700 dark:to-slate-900">
      <div className="flex h-full w-full items-center justify-between ps-2 md:px-12">
        <div className="flex h-full w-fit flex-row items-center justify-center gap-1 md:gap-8">
          <button
            className="h-fit w-fit"
            onClick={() => set_sidebar.setOpenSidebar((c) => !c)}
          >
            <Bars3Icon className="h-7 w-7 rounded stroke-white hover:bg-slate-100 hover:bg-opacity-10" />
          </button>
          <Logo />
        </div>
        {/* <SearchBar /> */}
        <div className="flex h-full flex-row">
          <NavButtons />
          <LoginBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
