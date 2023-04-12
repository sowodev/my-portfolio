import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Filters = function filter() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="flex flex-col fixed gap-1 top-[12.8rem] w-[23rem] bg-white">
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
          collapse ? "collapse" : "w-full border border-[#B0B0B0] rounded-lg"
        }
      >
        <form className="flex flex-col mt-4 mb-4 gap-4">
          <div className="flex flex-col ml-4 gap-1">
            <p className="font-[Lexend] text-sm text-[#333333ce]">
              Filter by text:
            </p>
            <input
              className="w-[95%] h-[2rem] font-[Lexend] text-[#333333ce] border border-[#B0B0B0] rounded indent-2"
              type="text"
            />
          </div>
          <div className="flex flex-col ml-4 gap-1">
            <p className="font-[Lexend] text-sm text-[#333333ce]">
              Filter by tag:
            </p>
            <input
              className="w-[95%] h-[2rem] font-[Lexend] text-[#333333ce] border border-[#B0B0B0] rounded indent-2"
              type="text"
            />
          </div>
          {/*           <button
            type="submit"
            className="w-28 h-8 bg-sky-300 border border-sky-500 rounded font-[Lexend] self-end mr-4 hover:bg-sky-500"
          >
            Filter
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Filters;
