const TextCardProjects = function textCardProjects({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex w-full basis-1/4 justify-start items-end">
        <p className="font-[Lexend] text-sm mx-4 font-normal text-[#333333ce] line-clamp-1">
          {title}
        </p>
      </div>
      <div className="flex w-full basis-3/4 justify-center items-center">
        <p className="font-[Lexend] font-light text-sm mx-4 text-justify text-[#333333ce] line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TextCardProjects;
