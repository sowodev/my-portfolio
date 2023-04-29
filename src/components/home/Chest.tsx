import { ReactElement, useContext, useState } from "react";
import { HomeContext } from "./HomeContext";

const Chest = function chestComponent(): ReactElement {
  const context_object = useContext(HomeContext);

  return (
    <div className="flex relative h-full justify-center items-end">
      <div className="flex flex-col absolute h-1/5 w-1/2 top-28">
        <div className="flex flex-none relative basis-1/3 w-full">
          <button
            className="flex absolute drop-shadow-lg w-fit h-fit left-1/3 bottom-0"
            onClick={() => {
              context_object.setTextToShow("Me");
            }}
          >
            <img className="w-14 h-7" src="./src/assets/imgs/me.png" alt="" />
          </button>
        </div>
        <div className="flex flex-none relative basis-1/3 w-full">
          <button
            className="flex absolute drop-shadow-lg w-fit h-fit right-12 bottom-0 origin-center"
            onClick={() => {
              context_object.setTextToShow("MyStack");
            }}
          >
            <img
              className="w-36 h-7"
              src="./src/assets/imgs/mystack.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex flex-none relative basis-1/3 w-full">
          <button
            className="flex absolute drop-shadow-lg w-fit h-fit left-12 bottom-0 origin-center"
            onClick={() => {
              context_object.setTextToShow("Learning");
            }}
          >
            <img
              className="w-40 h-8"
              src="./src/assets/imgs/learning.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="w-[75%] h-[52%] mb-[11%]">
        <img src="./src/assets/imgs/chest2.png" alt="" />
      </div>
    </div>
  );
};

export default Chest;
