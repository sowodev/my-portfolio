import { Transition } from '@headlessui/react';
import {
  HomeIcon,
  MoonIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  SunIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import React, { Fragment, RefObject, useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Sidebar: React.FC = () => {
  const sidebar_ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { set_dark, set_sidebar } = useContext(GlobalContext);

  const handleOutsideClick = (e: MouseEvent) => {
    if (sidebar_ref.current && !sidebar_ref.current.contains(e.target as Node)) {
      set_sidebar.setOpenSidebar(false);
    }
  };

  const handleThemeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    set_dark.setIsDark(set_dark.is_dark === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', set_dark.is_dark === 'light' ? 'dark' : 'light');
  };

  // useEffect for handling outside click
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
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
          className="fixed z-20 flex h-[calc(100vh-104px)] w-60 bg-neutral-600 dark:bg-slate-700"
          ref={sidebar_ref}
        >
          <div className="flex h-full w-full flex-col justify-between py-12">
            <div className="flex h-fit w-full flex-col items-center justify-start gap-4">
              <NavLink
                to={'/'}
                className={`flex h-fit w-full items-center justify-center`}
                onClick={() => set_sidebar.setOpenSidebar(false)}
              >
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex h-10 w-4/5 flex-row items-center justify-start gap-4 rounded ps-8 ${
                        isActive && `border-l-[6px] border-white bg-neutral-500`
                      } hover:bg-[#606060]`}
                    >
                      <HomeIcon className={`h-6 w-6 stroke-white`} />
                      <span className="font-[Blinker] text-white">Home</span>
                    </div>
                  );
                }}
              </NavLink>
              <NavLink
                to={'/articles'}
                className={`flex h-fit w-full items-center justify-center`}
                onClick={() => set_sidebar.setOpenSidebar(false)}
              >
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex h-10 w-4/5 flex-row items-center justify-start gap-4 rounded ps-8 ${
                        isActive && `border-l-[6px] border-white bg-neutral-500`
                      } hover:bg-[#606060]`}
                    >
                      <NewspaperIcon className={`h-6 w-6 stroke-white`} />
                      <span className="font-[Blinker] text-white">Blog</span>
                    </div>
                  );
                }}
              </NavLink>
              <NavLink
                to={'/projects'}
                className={`flex h-fit w-full items-center justify-center`}
                onClick={() => set_sidebar.setOpenSidebar(false)}
              >
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex h-10 w-4/5 flex-row items-center justify-start gap-4 rounded ps-8 ${
                        isActive && `border-l-[6px] border-white bg-neutral-500`
                      } hover:bg-[#606060]`}
                    >
                      <RocketLaunchIcon className={`h-6 w-6 stroke-white`} />
                      <span className="font-[Blinker] text-white">Projects</span>
                    </div>
                  );
                }}
              </NavLink>
              <NavLink
                to={'/login'}
                className={`flex h-fit w-full items-center justify-center`}
                onClick={() => set_sidebar.setOpenSidebar(false)}
              >
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex h-10 w-4/5 flex-row items-center justify-start gap-4 rounded ps-8 ${
                        isActive && `border-l-[6px] border-white bg-neutral-500`
                      } hover:bg-[#606060]`}
                    >
                      <UserCircleIcon className={`h-6 w-6 stroke-white`} />
                      <span className="font-[Blinker] text-white">Sing In</span>
                    </div>
                  );
                }}
              </NavLink>
            </div>
            <div className="h-fit w-fit ps-8">
              <button
                className="flex h-9 w-9 items-center justify-center rounded border border-neutral-500 shadow-md transition duration-300 ease-in-out hover:scale-110 hover:bg-neutral-500 dark:border-gray-700 dark:bg-slate-800 dark:shadow-slate-600 dark:hover:bg-slate-700"
                onClick={handleThemeChange}
              >
                {set_dark.is_dark === 'dark' ? (
                  <SunIcon className="h-5 w-5 stroke-slate-200" />
                ) : (
                  <MoonIcon className="h-5 w-5 stroke-white" />
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
