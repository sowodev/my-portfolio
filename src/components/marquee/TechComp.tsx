const TechComp = function techComp({ name }: { name: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 border-l border-gray-700 px-8 ">
      <img
        className="h-5 w-5"
        src={`/src/assets/imgs/mystack/${name.toLowerCase()}.svg`}
        alt={`${name.toLowerCase()}`}
      />
      <span className="h-fit w-fit text-center font-[Lexend] text-lg font-light">
        {name}
      </span>
    </div>
  );
};

export default TechComp;
