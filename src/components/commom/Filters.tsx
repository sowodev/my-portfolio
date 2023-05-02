import { useState } from "react";
import MultiSelectTags from "./MultiSelectTags";

export interface Tag {
  id: string;
  name: string;
}

const Filters = function filters() {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleTagSelection = (tags: Tag[]) => {
    setSelectedTags(tags);
    console.log(tags);
  };

  const tags: Tag[] = [
    { id: "1", name: "React" },
    { id: "2", name: "TypeScript" },
    { id: "3", name: "TailwindCSS" },
    { id: "4", name: "JavaScript" },
    { id: "5", name: "HTML" },
    { id: "6", name: "CSS" },
  ];

  return (
    <>
      <div className="flex flex-col fixed gap-1 top-[12.8rem] w-[23rem] dark:bg-slate-800">
        <form className="flex flex-col mt-4 mb-4 gap-4">
          <div className="flex flex-col ml-4 gap-1">
            <p className="font-[Lexend] text-sm text-[#333333ce] dark:text-slate-300">
              Filter by text:
            </p>
            <input
              className="w-100 h-10 font-[Lexend] font-light border border-slate-300 rounded indent-2 focus:outline-none hover:border-[#333333ce] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col ml-4 gap-1 group">
            <p className="font-[Lexend] text-sm text-[#333333ce] dark:text-slate-300">
              Filter by tag:
            </p>
            <MultiSelectTags
              tags={tags}
              selectedTags={selectedTags}
              onChange={handleTagSelection}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Filters;
