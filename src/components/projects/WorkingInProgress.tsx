import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const WorkInProgress: React.FC<{ project: string }> = function workInProgress({
  project,
}) {
  return (
    <div className="flex flex-col gap-8 w-full h-full justify-center items-center">
      <WrenchScrewdriverIcon className="w-20 h-20 stroke-cyan-300" />
      <h1 className="h-fit w-[50%] font-[Lexend] text-3xl text-justify dark:text-white">
        <b>{project}</b> is under some improvements right now, I am sorry for
        the inconvenience.{" "}
      </h1>
      <i className="text-amber-300 text-3xl">
        Please visit other projects, or come back later!
      </i>
    </div>
  );
};

export default WorkInProgress;
