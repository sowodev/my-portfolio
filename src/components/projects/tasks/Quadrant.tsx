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
    <div className="flex flex-row w-[97%] h-[97%] bg-gray-100 border border-gray-400">
      <div className="flex flex-col h-full basis-1/3">
        <div
          className={`flex w-full h-[10%] justify-center items-center border-e border-b border-gray-400 border-dashed ${tail_color}`}
        >
          <span className="h-fit w-fit font-[Lexend]">To Do</span>
        </div>
        <div className="flex w-full h-[90%] border-e border-gray-400 border-dashed">
          TODO body
        </div>
      </div>
      <div className="flex flex-col h-full basis-1/3">
        <div
          className={`flex w-full h-[10%] justify-center items-center border-e border-b border-gray-400 border-dashed ${tail_color}`}
        >
          <span className="h-fit w-fit font-[Lexend]">In Progress</span>
        </div>
        <div className="flex w-full h-[90%] border-e border-gray-400 border-dashed">
          INPROGRESS body
        </div>
      </div>
      <div className="flex flex-col h-full basis-1/3">
        <div
          className={`flex w-full h-[10%] justify-center items-center border-b border-gray-400 border-dashed ${tail_color}`}
        >
          <span className="h-fit w-fit font-[Lexend]">Done</span>
        </div>
        <div className="flex w-full h-[90%]">DONE body</div>
      </div>
    </div>
  );
};

export default Quadrant;
