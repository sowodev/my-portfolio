import TagsList from "./TagsList";
import TextCard from "./TextCard";

const Card = function card({ path }: { path: string }) {
  return (
    <div className="flex flex-row w-[92%] h-1/5 border border-slate-400 shadow-md">
      <div className="h-full w-1/4 text-center">
        <img className="h-full w-full" src={path} alt="" />
      </div>
      <div className="flex flex-col h-full w-3/4 bg-violet-200">
        <div className="w-full h-4/5 bg-emerald-200">
          <TextCard />
        </div>
        <div className="flex flex-row w-full h-1/5 bg-cyan-200 justify-end items-center">
          <TagsList />
        </div>
      </div>
    </div>
  );
};

export default Card;
