const TechComp = function techComp({ name }: { name: string }) {
  return (
    <div className="flex flex-row px-8 justify-center items-center gap-2 border-l border-gray-700 ">
      <img
        className="h-5 w-5"
        src={`/src/assets/imgs/mystack/${name.toLowerCase()}.svg`}
        alt={`${name.toLowerCase()}`}
      />
      <span className="w-fit h-fit font-[Lexend] font-light text-lg text-center">
        {name}
      </span>
    </div>
  );
};

export default TechComp;
