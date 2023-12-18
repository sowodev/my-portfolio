import OpenCreditsDialogBtn from '@components/credits-dialog/OpenCreditsDialogBtn';
import AppContext from '@context/AppContext';
import { Transition } from '@headlessui/react';
import {
  HomeIcon,
  MoonIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  SunIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import React, { FC, Fragment, ReactElement, RefObject, useContext, useEffect, useRef } from 'react';
import SidebarNavigator from './SidebarNavigator';

type NavBtns = {
  name: string;
  address: string;
  icon: ReactElement;
};

const Sidebar: FC = (): ReactElement => {
  const sidebar_ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { theme, sidebar } = useContext(AppContext);

  const sidebar_navigate_btns: NavBtns[] = [
    {
      name: 'Home',
      address: '/',
      icon: <HomeIcon className={`h-6 w-6 stroke-white`} />,
    },
    {
      name: 'Blog',
      address: '/blog',
      icon: <NewspaperIcon className={`h-6 w-6 stroke-white`} />,
    },
    {
      name: 'Projects',
      address: '/projects',
      icon: <RocketLaunchIcon className={`h-6 w-6 stroke-white`} />,
    },
    {
      name: 'Sing In',
      address: '/auth',
      icon: <UserCircleIcon className={`h-6 w-6 stroke-white`} />,
    },
  ];

  const handleOutsideClick = (e: MouseEvent) => {
    if (sidebar_ref.current && !sidebar_ref.current.contains(e.target as Node)) {
      sidebar.setOpen(false);
    }
  };

  const handleThemeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    theme.setMode(theme.mode === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme.mode === 'light' ? 'dark' : 'light');
  };

  // useEffect for handling outside click
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Transition show={sidebar.open}>
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
                {sidebar_navigate_btns.map((btn: NavBtns, index: number): ReactElement => {
                  return <SidebarNavigator name={btn.name} address={btn.address} icon={btn.icon} />;
                })}
              </div>
              <div className="flex h-fit w-4/5 ps-8 justify-between items-center">
                <button
                  className="flex h-9 w-9 items-center justify-center rounded border border-neutral-500 shadow-md transition duration-300 ease-in-out hover:scale-110 hover:bg-neutral-500 dark:border-gray-700 dark:bg-slate-800 dark:shadow-slate-600 dark:hover:bg-slate-700"
                  onClick={handleThemeChange}
                >
                  {theme.mode === 'dark' ? (
                    <SunIcon className="h-5 w-5 stroke-slate-200" />
                  ) : (
                    <MoonIcon className="h-5 w-5 stroke-white" />
                  )}
                </button>
                <OpenCreditsDialogBtn />
              </div>
            </div>
          </div>
        </Transition.Child>
      </Transition>
      <Transition show={sidebar.open}>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10 flex bg-black bg-opacity-25 transition duration-300 ease-in-out" />
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Sidebar;
