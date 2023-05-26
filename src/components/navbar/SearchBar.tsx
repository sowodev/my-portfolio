import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = function searchBar() {
  const [inputF, setInputF] = useState(true);

  return (
    <div className="invisible flex h-[53%] w-[28rem] items-center justify-between text-white">
      <div className="flex h-full w-full items-center">
        <input
          id="searchtab"
          className="relative grid h-full w-full content-center rounded-l border-b border-l border-t border-[#f5f5f538] bg-[#ffffff3f] indent-4 font-[Lexend] font-light placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Search"
          type="search"
          onChange={(e) => {
            console.log(e.target.value === "");
          }}
          onFocus={() => setInputF(false)}
          onBlur={() => setInputF(true)}
        />
        <div
          className={`absolute top-[3.6rem] flex h-[25rem] w-[25.9rem] flex-col rounded-lg bg-white ${
            inputF && "collapse"
          }`}
        >
          <div className="flex w-full basis-1/5 flex-row rounded-t-lg bg-gray-200"></div>
          <div className="flex w-full basis-1/5 flex-row bg-sky-200"></div>
          <div className="flex w-full basis-1/5 flex-row bg-cyan-200"></div>
          <div className="flex w-full basis-1/5 flex-row bg-pink-200"></div>
          <div className="flex w-full basis-1/5 flex-row rounded-b-lg bg-orange-200"></div>
        </div>
      </div>
      <button className="grid h-full w-9 place-content-center rounded-r border border-[#f5f5f538] bg-[#ffffff3f] focus:outline-none focus:ring-2 focus:ring-gray-400">
        <MagnifyingGlassIcon className="pointer-events-none h-6 w-6 stroke-white" />
      </button>
    </div>
  );
};

export default SearchBar;
