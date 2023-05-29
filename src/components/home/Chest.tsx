import { ReactElement, useContext, useState } from "react";
import { HomeContext } from "./HomeContext";
import chest_treasure from "/src/assets/imgs/chest.png";

const Chest = function chestComponent(): ReactElement {
  const context_object = useContext(HomeContext);

  return (
    <div className="relative flex h-full items-end justify-center">
      <div className="absolute top-28 flex h-1/5 w-1/2 flex-col">
        <div className="relative flex w-full flex-none basis-1/3">
          <button
            className="absolute bottom-0 left-1/3 flex h-fit w-fit drop-shadow-lg"
            onClick={() => {
              context_object.setTextToShow("Me");
            }}
          >
            <img className="h-7 w-14" src="./src/assets/imgs/me.png" alt="" />
          </button>
        </div>
        <div className="relative flex w-full flex-none basis-1/3">
          <button
            className="absolute bottom-0 right-12 flex h-fit w-fit origin-center drop-shadow-lg"
            onClick={() => {
              context_object.setTextToShow("MyStack");
            }}
          >
            <img
              className="h-7 w-36"
              src="./src/assets/imgs/mystack.png"
              alt=""
            />
          </button>
        </div>
        <div className="relative flex w-full flex-none basis-1/3">
          <button
            className="absolute bottom-0 left-12 flex h-fit w-fit origin-center drop-shadow-lg"
            onClick={() => {
              context_object.setTextToShow("Learning");
            }}
          >
            <img
              className="h-8 w-40"
              src="./src/assets/imgs/learning.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="mb-[11%] h-[52%] w-[75%]">
        <img src={chest_treasure} alt="" />
      </div>
    </div>
  );
};

export default Chest;
