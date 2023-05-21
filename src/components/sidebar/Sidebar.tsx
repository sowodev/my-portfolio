import {
  HomeIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, {
  Fragment,
  RefObject,
  useContext,
  useEffect,
  useRef,
} from "react";
import DarkModeBtn from "../global-btns/DarkModeBtn";
import { Transition } from "@headlessui/react";
import { GlobalContext } from "../commom/context/GlobalContext";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const sidebar_ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { set_sidebar } = useContext(GlobalContext);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      sidebar_ref.current &&
      !sidebar_ref.current.contains(e.target as Node)
    ) {
      set_sidebar.setOpenSidebar(false);
    }
  };

  // useEffect for handling outside click
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Transition show={set_sidebar.open_sidebar}>
      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          className="flex absolute w-60 h-full z-20 bg-neutral-600 dark:bg-slate-700"
          ref={sidebar_ref}
        >
          <div className="flex flex-col w-full h-full justify-between py-12">
            <div className="flex flex-col w-full h-fit justify-start items-center gap-4">
              <NavLink
                to={"/"}
                className="flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 hover:bg-[#606060]"
              >
                <HomeIcon className={`w-6 h-6 stroke-white`} />
                <span className="font-[Blinker] text-white">Home</span>
              </NavLink>
              <NavLink
                to={"/articles"}
                className="flex flex-row w-4/5 h-10 bg-neutral-500 border-l-[6px] border-white rounded justify-start items-center ps-8 gap-4"
              >
                <NewspaperIcon className={`w-6 h-6 stroke-white`} />
                <span className="font-[Blinker] text-white">Blog</span>
              </NavLink>
              <NavLink
                to={"/projects"}
                className="flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 hover:bg-[#606060]"
              >
                <RocketLaunchIcon className={`w-6 h-6 stroke-white`} />
                <span className="font-[Blinker] text-white">Projects</span>
              </NavLink>
              <NavLink
                to={"/login"}
                className="flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 hover:bg-[#606060]"
              >
                <UserCircleIcon className={`w-6 h-6 stroke-white`} />
                <span className="font-[Blinker] text-white">Sing In</span>
              </NavLink>
            </div>
            <div className="w-fit h-fit ps-8">
              <DarkModeBtn />
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default Sidebar;
