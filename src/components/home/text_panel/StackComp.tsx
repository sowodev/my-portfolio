const StackComp = function stackComp({
  name,
  icon,
  quote,
  desc,
}: {
  name: string;
  icon: string;
  quote: string;
  desc: string;
}) {
  const src: string = "/imgs/mystack/" + icon + ".svg";
  return (
    <div className="flex flex-col">
      <div className="flex h-fit w-fit flex-row items-center">
        <img
          className="my-0 w-[30px] lg:w-[50px] mr-[10px]"
          alt={name}
          src={src}
        />{" "}
        <h3 className="my-0 font-bold lg:font-normal text-sm lg:text-base h-full w-full dark:text-white">
          {name}
        </h3>
      </div>
      <blockquote className="my-4 font-[Lexend] font-light text-sm lg:text-base border-gray-600 dark:text-slate-300 dark:border-slate-300">
        {quote}
      </blockquote>
      <p className="my-0 font-[Lexend] font-light text-sm lg:text-base indent-5 dark:text-slate-300">
        {desc}
      </p>
    </div>
  );
};

export default StackComp;
