type QuadrantProps = {
  color: string;
};

const Quadrant: React.FC<QuadrantProps> = function quandrant({ color }) {
  const tail_color =
    color === "yellow"
      ? "bg-[#ffed49]"
      : color === "red"
      ? "bg-[#ff867e]"
      : color === "green"
      ? "bg-[#8dff99]"
      : "bg-[#ffb978]";
  return (
    <div className="flex flex-col w-[97%] h-[97%] bg-gray-100 border border-gray-400">
      <div
        className={`flex flex-row w-full h-[10%] border-b border-gray-400 border-dashed ${tail_color}`}
      >
        <div className="flex h-full basis-1/3 font-[Lexend] border-e border-gray-400 border-dashed justify-center items-center">
          <span className="h-fit w-fit text-lg">To Do</span>
        </div>
        <div className="flex h-full basis-1/3 font-[Lexend] border-e border-gray-400 border-dashed justify-center items-center">
          <span className="h-fit w-fit text-lg">In Progress</span>
        </div>
        <div className="flex h-full basis-1/3 font-[Lexend] justify-center items-center">
          <span className="h-fit w-fit text-lg">Done</span>
        </div>
      </div>
      <div className="flex flex-row w-full h-[90%]">
        <div className="w-1/3 h-full border-e border-gray-400 border-dashed">
          {" "}
          TODO Col{" "}
        </div>
        <div className="w-1/3 h-full border-e border-gray-400 border-dashed">
          {" "}
          IN PROGRESS Col{" "}
        </div>
        <div className="w-1/3 h-full"> DONE Col </div>
      </div>
    </div>
  );
};

export default Quadrant;
