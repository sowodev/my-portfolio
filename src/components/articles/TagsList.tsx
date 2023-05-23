const TagsList = function tagsList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-row h-[85%] w-[50%] mr-8 justify-around items-center">
      <div className="flex h-[90%] basis-[30%] justify-center items-center">
        <p className="font-[Lexend] font-light text-xs text-[#26B1FF]">
          {tags[0].length > 10 ? tags[0].slice(0, 9) + "..." : tags[0]}
        </p>
      </div>
      <div className="flex h-[90%] basis-[30%] justify-center items-center">
        <p className="font-[Lexend] font-light text-xs text-[#26B1FF]">
          {tags[1].length > 10 ? tags[1].slice(0, 9) + "..." : tags[1]}
        </p>
      </div>
      <div className="flex h-[90%] basis-[30%] justify-center items-center">
        <p className="font-[Lexend] font-light text-xs text-[#26B1FF]">
          {tags[2].length > 10 ? tags[2].slice(0, 9) + "..." : tags[2]}
        </p>
      </div>
    </div>
  );
};

export default TagsList;
