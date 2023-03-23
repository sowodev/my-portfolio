import { ReactElement } from "react";

const Chest = function chestComponent(): ReactElement {
  return (
    <div className="flex relative w-11/12 h-11/12 justify-center">
      <div className="flex flex-col absolute h-1/5 w-1/2 top-28">
        <div className="flex flex-none relative basis-1/3 w-full">
          <button className="flex absolute drop-shadow-lg w-fit h-fit left-1/3 bottom-0">
            <img className="w-14 h-7" src="./src/assets/imgs/me.png" alt="" />
          </button>
        </div>
        <div className="flex flex-none relative basis-1/3 w-full">
          <button className="flex absolute drop-shadow-lg w-fit h-fit right-12 bottom-0 origin-center">
            <img
              className="w-36 h-7"
              src="./src/assets/imgs/mystack.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex flex-none relative basis-1/3 w-full">
          <button className="flex absolute drop-shadow-lg w-fit h-fit left-12 bottom-0 origin-center">
            <img
              className="w-40 h-8"
              src="./src/assets/imgs/learning.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <img src="./src/assets/imgs/chest.png" alt="" />
    </div>
  );
};

export default Chest;
