import {
  HomeIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import DarkModeBtn from "../global-btns/DarkModeBtn";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between py-12">
      <div className="flex flex-col w-full h-fit justify-start items-center gap-4">
        <div className="flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 hover:bg-[#606060]">
          <HomeIcon className={`w-6 h-6 stroke-white`} />
          <span className="font-[Blinker] text-white">Home</span>
        </div>
        <div className="flex flex-row w-4/5 h-10 bg-neutral-500 border-l-[6px] border-white rounded justify-start items-center ps-8 gap-4">
          <NewspaperIcon className={`w-6 h-6 stroke-white`} />
          <span className="font-[Blinker] text-white">Blog</span>
        </div>
        <div className="flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 hover:bg-[#606060]">
          <RocketLaunchIcon className={`w-6 h-6 stroke-white`} />
          <span className="font-[Blinker] text-white">Projects</span>
        </div>
        <div className="flex flex-row w-4/5 h-10 rounded justify-start items-center ps-8 gap-4 hover:bg-[#606060]">
          <UserCircleIcon className={`w-6 h-6 stroke-white`} />
          <span className="font-[Blinker] text-white">Sing In</span>
        </div>
      </div>
      <div className="w-fit h-fit ps-8">
        <DarkModeBtn />
      </div>
    </div>
  );
};

export default Sidebar;
