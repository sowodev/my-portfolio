import { useState } from "react";
import WorkingInProgress from "../WorkingInProgress";

const ProductivityDashboard = function productivityDashboard() {
  const [isFinished, setIsFinished] = useState(false);

  return isFinished ? (
    <WorkingInProgress project="Productivity Dashboard" />
  ) : (
    <div className="flex flex-row h-full w-full bg-gray-100">
      <div className="h-full basis-[10%]"></div>
      <div className="flex flex-row flex-wrap h-full basis-4/5 gap-4 p-8 overflow-y-auto">
        <div className="flex h-[28rem] w-[25rem] bg-white justify-center items-center">
          Tasks
        </div>
        <div className="flex h-[30rem] w-[18rem] bg-white justify-center items-center">
          Timers
        </div>
        <div className="flex h-[28rem] w-[24rem] bg-white justify-center items-center">
          Daily Scheduled Events
        </div>
        <div className="flex h-[20rem] w-[18rem] bg-white justify-center items-center">
          Calendar
        </div>
        <div className="flex h-[30rem] w-[25rem] bg-white justify-center items-center">
          FIPPSS
        </div>
        <div className="flex h-[28rem] w-[25rem] bg-white justify-center items-center">
          Messages
        </div>
        <div className="flex h-[30rem] w-[38rem] bg-white justify-center items-center">
          Finances
        </div>
        <div className="flex h-[38rem] w-[35rem] bg-white justify-center items-center">
          Weekly Schedule
        </div>
      </div>
      <div className="h-full basis-[10%]"></div>
    </div>
  );
};

export default ProductivityDashboard;
