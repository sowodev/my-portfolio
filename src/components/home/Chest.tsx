import { ReactElement, useContext } from "react";
import { HomeContext } from "./HomeContext";

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
            <img className="h-7 w-14" src="/imgs/me.png" alt="Me" />
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
              src="/imgs/mystack.png"
              alt="Tech Stack"
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
            <img className="h-8 w-40" src="/imgs/learning.png" alt="Learning" />
          </button>
        </div>
      </div>
      <div className="mb-[11%] h-[52%] w-[75%]">
        <img src="/imgs/chest.png" alt="treasure chest" />
      </div>
    </div>
  );
};

export default Chest;
