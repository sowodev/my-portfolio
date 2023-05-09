const TagsListProjects = function tagsListProjects({
  tags,
  img_loaded,
}: {
  tags: string[];
  img_loaded: boolean;
}) {
  return (
    <div className="flex flex-row gap-6 pr-2 w-full h-full justify-end items-center">
      {img_loaded
        ? tags.map((tag, index) => (
            <div key={index} className="flex justify-around items-center">
              <p className="font-[Lexend] font-light text-xs text-[#26B1FF]">
                {tag.length > 10 ? tag.slice(0, 10) + "..." : tag}
              </p>
            </div>
          ))
        : tags.map((tag, index) => (
            <div key={index} className="flex justify-around items-center">
              <p className="font-[Lexend] font-light text-xs text-gray-200 bg-gray-200 animate-pulse dark:text-slate-700 dark:bg-slate-700">
                {tag}
              </p>
            </div>
          ))}
    </div>
  );
};

export default TagsListProjects;
