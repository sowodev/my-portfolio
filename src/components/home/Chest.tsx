import { ReactElement, useContext } from "react";
import { HomeContext } from "./HomeContext";

const Chest = function chestComponent(): ReactElement {
  const context_object = useContext(HomeContext);

  return (
    <div className="relative flex h-full items-end justify-center">
      <div className="absolute top-20 md:top-2 lg:top-28 flex w-[80%] h-1/4 lg:h-1/5 md:w-2/5 lg:w-1/2 flex-col">
        <div className="flex w-full flex-none basis-1/3 justify-center items-end">
          <button
            className="flex h-fit w-fit drop-shadow-lg"
            onClick={() => {
              context_object.setTextToShow("Me");
            }}
          >
            <img
              className="h-6 w-12 lg:h-7 lg:w-14"
              src="/imgs/me.png"
              alt="Me"
            />
          </button>
        </div>
        <div className="flex w-full flex-none basis-1/3 justify-end items-center">
          <button
            className="flex h-fit w-fit origin-center drop-shadow-lg"
            onClick={() => {
              context_object.setTextToShow("MyStack");
            }}
          >
            <img
              className="h-6 w-20 lg:h-7 lg:w-36"
              src="/imgs/mystack.png"
              alt="Tech Stack"
            />
          </button>
        </div>
        <div className="flex w-full flex-none basis-1/3 justify-start items-end">
          <button
            className="flex h-fit w-fit origin-center drop-shadow-lg"
            onClick={() => {
              context_object.setTextToShow("Learning");
            }}
          >
            <img
              className="h-6 w-24 lg:h-8 lg:w-40"
              src="/imgs/learning.png"
              alt="Learning"
            />
          </button>
        </div>
      </div>
      <div className="mb-[30%] md:mb-0 md:h-3/4 md:w-[60%] lg:mb-[11%] lg:h-[52%] lg:w-[75%]">
        <img src="/imgs/chest.png" alt="treasure chest" />
      </div>
    </div>
  );
};

export default Chest;
