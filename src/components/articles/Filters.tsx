import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Filters = function filter() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="flex flex-col absolute top-[4rem] w-[75%] bg-white">
      <button
        className="flex w-full h-[2.2rem] bg-[#D9D9D9] items-center justify-between rounded"
        onClick={() => {
          setCollapse((current) => {
            return !current;
          });
        }}
      >
        <p className="font-[Lexend] text-lg ml-4 text-[#333333ce]">Filters</p>
        <div className={collapse ? "mr-4" : "mr-4 origin-center rotate-180"}>
          <ChevronDownIcon className="h-5 w-5 stroke-[#333333ce] pointer-events-none" />
        </div>
      </button>
      <div
        className={
          collapse
            ? "w-full h-[90%] border-x border-b border-[#B0B0B0] collapse"
            : "w-full h-[90%] border-x border-b border-[#B0B0B0]"
        }
      >
        <form className="flex flex-col my-4 gap-4">
          <div className="flex flex-col ml-4 gap-1">
            <p className="font-[Lexend] text-sm text-[#333333ce]">
              Search by text:
            </p>
            <input className="w-[95%] border border-[#B0B0B0]" type="text" />
          </div>
          <div className="flex flex-col ml-4 gap-1">
            <p className="font-[Lexend] text-sm text-[#333333ce]">
              Search by tag:
            </p>
            <input className="w-[95%] border border-[#B0B0B0]" type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
