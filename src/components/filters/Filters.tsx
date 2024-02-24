import { PostsController } from '@domain/blog/types/posts';
import { ProjectsController } from '@domain/projects/types/projects';
import { FC, ReactElement, useEffect, useState } from 'react';
import MultiSelectTags from './MultiSelectTags';

type FiltersProps = {
  multi_card_controller: PostsController | ProjectsController;
};

const Filters: FC<FiltersProps> = ({ multi_card_controller }: FiltersProps): ReactElement => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handleTagSelection = (tags: string[]) => {
    setSelectedTags(tags);
    multi_card_controller.filterMultiCardsByTag(tags);
  };

  useEffect(() => {
    setTags(() => multi_card_controller.getTags());
  }, [multi_card_controller]);

  return (
    <>
      <div className="flex fixed w-[23rem] flex-col gap-1">
        <form className="mb-4 mt-4 flex flex-col gap-4">
          <div className="ml-4 flex flex-col gap-1">
            <p className="font-[Lexend] text-sm text-[#333333ce] dark:text-slate-300">
              Filter by text:
            </p>
            <input
              className="h-[2.375rem] w-full rounded border border-slate-300 indent-2 font-[Lexend] font-light text-[#333333ce] placeholder:text-slate-300 focus:outline-none focus:outline-1 focus:outline-offset-0 focus:outline-blue-500 dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300 dark:placeholder:text-slate-500 dark:hover:bg-slate-700"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                multi_card_controller.filterMultiCardsByText(e.target.value);
              }}
            />
          </div>
          <div className="group ml-4 flex flex-col gap-1">
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
