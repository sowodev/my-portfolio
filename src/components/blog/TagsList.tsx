const TagsList = function tagsList({ tags }: { tags: string[] }) {
  return (
    <div className="flex h-full md:h-[85%] mx-8 w-[95%] flex-row items-center justify-between">
      <div className="flex h-full w-fit lg:basis-[30%] items-center justify-center">
        <p className="font-[Lexend] text-xs font-light text-[#26B1FF]">
          {tags[0].length >= 14 ? tags[0].slice(0, 13) + "..." : tags[0]}
        </p>
      </div>
      <div className="flex h-full w-fit lg:basis-[30%] items-center justify-center">
        <p className="font-[Lexend] text-xs font-light text-[#26B1FF]">
          {tags[1].length >= 14 ? tags[1].slice(0, 13) + "..." : tags[1]}
        </p>
      </div>
      <div className="flex h-full w-fit lg:basis-[30%] items-center justify-center">
        <p className="font-[Lexend] text-xs font-light text-[#26B1FF]">
          {tags[2].length >= 14 ? tags[2].slice(0, 13) + "..." : tags[2]}
        </p>
      </div>
    </div>
  );
};

export default TagsList;
