const TagsListProjects = function tagsListProjects({
  tags,
}: {
  tags: string[];
}) {
  return (
    <div className="flex flex-row gap-2 pr-2 w-full h-full justify-end items-center">
      {tags.map((tag, index) => (
        <div key={index} className="flex justify-around items-center">
          <p className="font-[Lexend] font-light text-xs text-[#26B1FF]">
            {tag}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TagsListProjects;
