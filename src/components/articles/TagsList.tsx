const TagsList = function tagsList({ tags }: { tags: string[] }) {
  const tag1: string = tags[0].trim();
  const tag2: string = tags[1].trim();
  const tag3: string = tags[2].trim();
  return (
    <div className="lg:mr-8 flex h-full md:h-[85%] mx-8 lg:mx-0 w-[95%] lg:w-[50%] flex-row items-center justify-between">
      <div className="flex h-full w-fit lg:basis-[30%] items-center justify-center">
        <p className="font-[Lexend] text-xs font-light text-[#26B1FF]">
          {tag1.length >= 14 ? tag1.slice(0, 13) + "..." : tag1}
        </p>
      </div>
      <div className="flex h-full w-fit lg:basis-[30%] items-center justify-center">
        <p className="font-[Lexend] text-xs font-light text-[#26B1FF]">
          {tag2.length >= 14 ? tag2.slice(0, 13) + "..." : tag2}
        </p>
      </div>
      <div className="flex h-full w-fit lg:basis-[30%] items-center justify-center">
        <p className="font-[Lexend] text-xs font-light text-[#26B1FF]">
          {tag3.length >= 14 ? tag3.slice(0, 13) + "..." : tag3}
        </p>
      </div>
    </div>
  );
};

export default TagsList;
