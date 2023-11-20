import { FC, ReactElement } from 'react';

type TagsListProjectsProps = {
  tags: string[];
  img_loaded: boolean;
};

const TagsListProjects: FC<TagsListProjectsProps> = ({
  tags,
  img_loaded,
}: TagsListProjectsProps): ReactElement => {
  return (
    <div className="flex h-full w-full flex-row items-center justify-end gap-6 pr-2">
      {img_loaded
        ? tags.map(
            (tag: string, index: number): ReactElement => (
              <div key={index} className="flex items-center justify-around">
                <p className="font-[Lexend] text-xs font-light text-[#26B1FF]">
                  {tag.length > 10 ? tag.slice(0, 10) + '...' : tag}
                </p>
              </div>
            ),
          )
        : tags.map(
            (tag: string, index: number): ReactElement => (
              <div key={index} className="flex items-center justify-around">
                <p className="animate-pulse bg-gray-200 font-[Lexend] text-xs font-light text-gray-200 dark:bg-slate-700 dark:text-slate-700">
                  {tag}
                </p>
              </div>
            ),
          )}
    </div>
  );
};

export default TagsListProjects;
