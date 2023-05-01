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
  const src: string = "./src/assets/imgs/mystack/" + icon + ".svg";
  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-fit h-fit items-center">
        <img className="pr-[10px] l-0 w-[50px] my-0" alt={name} src={src} />{" "}
        <h3 className="my-0 w-full h-full dark:text-slate-300">{name}</h3>
      </div>
      <blockquote className="my-4 dark:text-slate-300">{quote}</blockquote>
      <p className="my-4 indent-5 dark:text-slate-300">{desc}</p>
    </div>
  );
};

export default StackComp;
