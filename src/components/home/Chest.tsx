import { ReactElement } from "react";

const Chest = function chestComponent(): ReactElement {
  const src: string = "./src/assets/imgs/me.png";
  const src1: string = "./src/assets/imgs/mystack.png";
  const src2: string = "./src/assets/imgs/learning.png";

  const size: string = "w-14 h-7";
  const size1: string = "w-36 h-7";
  const size2: string = "w-40 h-8";

  return (
    <div className="flex relative w-11/12 h-11/12 justify-center">
      <div className="flex flex-col absolute h-1/5 w-1/2 top-28">
        <div className="flex flex-none relative basis-1/3 w-full">
          <button className="flex absolute drop-shadow-lg w-fit h-fit left-1/3 bottom-0">
            <img className={size} src={src} alt="" />
          </button>
        </div>
        <div className="flex flex-none relative basis-1/3 w-full">
          <button className="flex absolute drop-shadow-lg w-fit h-fit right-12 bottom-0 origin-center">
            <img className={size1} src={src1} alt="" />
          </button>
        </div>
        <div className="flex flex-none relative basis-1/3 w-full">
          <button className="flex absolute drop-shadow-lg w-fit h-fit left-12 bottom-0 origin-center">
            <img className={size2} src={src2} alt="" />
          </button>
        </div>
      </div>
      <img src="./src/assets/imgs/chest.png" alt="" />
    </div>
  );
};

export default Chest;
