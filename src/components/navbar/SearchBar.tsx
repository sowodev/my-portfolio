import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = function searchBar() {
  const [inputF, setInputF] = useState(true);

  return (
    <div className="flex h-[53%] w-[28rem] justify-between items-center text-white invisible">
      <div className="flex w-full h-full items-center">
        <input
          id="searchtab"
          className="grid relative font-[Lexend] font-light w-full h-full border-t border-l border-b border-[#f5f5f538] bg-[#ffffff3f] content-center rounded-l indent-4 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-slate-200"
          placeholder="Search"
          type="search"
          onChange={(e) => {
            console.log(e.target.value === "");
          }}
          onFocus={() => setInputF(false)}
          onBlur={() => setInputF(true)}
        />
        <div
          className={`flex flex-col absolute top-[3.6rem] w-[25.9rem] h-[25rem] bg-white rounded-lg ${
            inputF && "collapse"
          }`}
        >
          <div className="flex flex-row w-full basis-1/5 bg-gray-200 rounded-t-lg"></div>
          <div className="flex flex-row w-full basis-1/5 bg-sky-200"></div>
          <div className="flex flex-row w-full basis-1/5 bg-cyan-200"></div>
          <div className="flex flex-row w-full basis-1/5 bg-pink-200"></div>
          <div className="flex flex-row w-full basis-1/5 bg-orange-200 rounded-b-lg"></div>
        </div>
      </div>
      <button className="grid w-9 h-full place-content-center bg-[#ffffff3f] border border-[#f5f5f538] focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-r">
        <MagnifyingGlassIcon className="h-6 w-6 stroke-white pointer-events-none" />
      </button>
    </div>
  );
};

export default SearchBar;
