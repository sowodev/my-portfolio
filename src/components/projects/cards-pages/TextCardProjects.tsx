const TextCardProjects = function textCardProjects({
  title,
  description,
  img_loaded,
}: {
  title: string;
  description: string;
  img_loaded: boolean;
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex w-full basis-1/4 justify-start items-end">
        {img_loaded ? (
          <p className="font-[Lexend] text-sm mx-4 font-normal text-[#333333ce] line-clamp-1 dark:text-white">
            {title}
          </p>
        ) : (
          <p className="text-gray-200 mx-4 bg-gray-200 animate-pulse dark:text-slate-700 dark:bg-slate-700">
            {title}
          </p>
        )}
      </div>
      <div className="flex w-full basis-3/4 justify-center items-center">
        {img_loaded ? (
          <p className="font-[Lexend] font-light text-sm mx-4 text-justify text-[#333333ce] line-clamp-4 dark:text-slate-300">
            {description}
          </p>
        ) : (
          <p className="text-sm mx-4 text-justify text-gray-200 bg-gray-200 animate-pulse dark:text-slate-700 dark:bg-slate-700">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextCardProjects;
