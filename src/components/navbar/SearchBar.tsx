import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = function searchBar() {
  const [inputF, setInputF] = useState(false);

  return (
    <div className="nav-button-search relative justify-between">
      <div className="flex w-full h-full items-center">
        <label
          htmlFor="searchtab"
          className="flex-none absolute search-text ml-8"
          hidden={inputF}
        >
          Search (alt+s)
        </label>
        <input
          id="searchtab"
          className="grid relative search w-full h-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          type="search"
          onChange={(e) => {
            console.log(e.target.value === "");
          }}
          onFocus={(e) => {
            setInputF(true);
          }}
          onBlur={(e) => {
            e.target.value === "" ? setInputF(false) : null;
          }}
        />
      </div>
      <button className="grid w-9 h-full place-content-center search-btn focus:outline-none focus:ring-2 focus:ring-gray-400">
        <MagnifyingGlassIcon className="h-6 w-6 stroke-white pointer-events-none" />
      </button>
    </div>
  );
};

export default SearchBar;
