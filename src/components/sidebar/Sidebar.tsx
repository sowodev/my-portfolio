import {
  HomeIcon,
  MoonIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, {
  Fragment,
  RefObject,
  useContext,
  useEffect,
  useRef,
} from "react";
import { Transition } from "@headlessui/react";
import { GlobalContext } from "../commom/context/GlobalContext";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const sidebar_ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { set_dark, set_sidebar } = useContext(GlobalContext);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      sidebar_ref.current &&
      !sidebar_ref.current.contains(e.target as Node)
    ) {
      set_sidebar.setOpenSidebar(false);
    }
  };

  const handleThemeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    set_dark.setIsDark(set_dark.is_dark === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme",
      set_dark.is_dark === "light" ? "dark" : "light"
    );
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
                className={`flex w-full h-fit justify-center items-center`}
                onClick={() => set_sidebar.setOpenSidebar(false)}
              >
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 ${
                        isActive && `bg-neutral-500 border-l-[6px] border-white`
                      } hover:bg-[#606060]`}
                    >
                      <HomeIcon className={`w-6 h-6 stroke-white`} />
                      <span className="font-[Blinker] text-white">Home</span>
                    </div>
                  );
                }}
              </NavLink>
              <NavLink
                to={"/articles"}
                className={`flex w-full h-fit justify-center items-center`}
                onClick={() => set_sidebar.setOpenSidebar(false)}
              >
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 ${
                        isActive && `bg-neutral-500 border-l-[6px] border-white`
                      } hover:bg-[#606060]`}
                    >
                      <NewspaperIcon className={`w-6 h-6 stroke-white`} />
                      <span className="font-[Blinker] text-white">Blog</span>
                    </div>
                  );
                }}
              </NavLink>
              <NavLink
                to={"/projects"}
                className={`flex w-full h-fit justify-center items-center`}
                onClick={() => set_sidebar.setOpenSidebar(false)}
              >
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 ${
                        isActive && `bg-neutral-500 border-l-[6px] border-white`
                      } hover:bg-[#606060]`}
                    >
                      <RocketLaunchIcon className={`w-6 h-6 stroke-white`} />
                      <span className="font-[Blinker] text-white">
                        Projects
                      </span>
                    </div>
                  );
                }}
              </NavLink>
              <NavLink
                to={"/login"}
                className={`flex w-full h-fit justify-center items-center`}
                onClick={() => set_sidebar.setOpenSidebar(false)}
              >
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 ${
                        isActive && `bg-neutral-500 border-l-[6px] border-white`
                      } hover:bg-[#606060]`}
                    >
                      <UserCircleIcon className={`w-6 h-6 stroke-white`} />
                      <span className="font-[Blinker] text-white">Sing In</span>
                    </div>
                  );
                }}
              </NavLink>
            </div>
            <div className="w-fit h-fit ps-8">
              <button
                className="flex w-9 h-9 rounded shadow-md border border-neutral-500 justify-center items-center hover:bg-neutral-500 hover:scale-110 dark:border-gray-700 dark:bg-slate-800 dark:shadow-slate-600 dark:hover:bg-slate-700 transition ease-in-out duration-300"
                onClick={handleThemeChange}
              >
                {set_dark.is_dark === "dark" ? (
                  <SunIcon className="w-5 h-5 stroke-slate-200" />
                ) : (
                  <MoonIcon className="w-5 h-5 stroke-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default Sidebar;
