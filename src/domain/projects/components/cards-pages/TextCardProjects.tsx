import { FC, ReactElement } from 'react';

type TextCardProjectsProps = {
  title: string;
  description: string;
  img_loaded: boolean;
};

const TextCardProjects: FC<TextCardProjectsProps> = ({
  title,
  description,
  img_loaded,
}: TextCardProjectsProps): ReactElement => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full basis-1/4 items-end justify-start">
        {img_loaded ? (
          <p className="mx-4 line-clamp-1 font-[Lexend] text-sm font-normal text-[#333333ce] dark:text-white">
            {title}
          </p>
        ) : (
          <p className="mx-4 animate-pulse bg-gray-200 text-gray-200 dark:bg-slate-700 dark:text-slate-700">
            {title}
          </p>
        )}
      </div>
      <div className="flex w-full basis-3/4 items-center justify-center">
        {img_loaded ? (
          <p className="mx-4 line-clamp-4 text-justify font-[Lexend] text-sm font-light text-[#333333ce] dark:text-slate-300">
            {description}
          </p>
        ) : (
          <p className="mx-4 animate-pulse bg-gray-200 text-justify text-sm text-gray-200 dark:bg-slate-700 dark:text-slate-700">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextCardProjects;
