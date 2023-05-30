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
        <img className="l-0 my-0 w-[50px] pr-[10px]" alt={name} src={src} />{" "}
        <h3 className="my-0 h-full w-full dark:text-slate-300">{name}</h3>
      </div>
      <blockquote className="my-4 dark:text-slate-300">{quote}</blockquote>
      <p className="my-4 indent-5 dark:text-slate-300">{desc}</p>
    </div>
  );
};

export default StackComp;
