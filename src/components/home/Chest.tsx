import { ReactElement } from "react";

const Chest = function chestComponent(): ReactElement {
  const src: string = "./src/assets/imgs/me.png";
  const src1: string = "./src/assets/imgs/learning.png";
  const src2: string = "./src/assets/imgs/mystack.png";

  const size: string = "w-20 h-10";
  const size1: string = "w-30 h-10";
  const size2: string = "w-26 h-10";

  return (
    <div className="relative flex w-11/12 h-11/12">
      <div className="flex flex-col absolute h-1/3 w-full bg-red-300">
        <div className="flex bg-sky-300 basis-1/3 w-full">
          <img className={size} src={src} alt="" />
        </div>
        <div className="flex bg-cyan-300 basis-1/3 w-full">
          <img className={size1} src={src1} alt="" />
        </div>
        <div className="flex bg-green-300 basis-1/3 w-full">
          <img className={size2} src={src2} alt="" />
        </div>
      </div>
      <img src="./src/assets/imgs/chest.png" alt="" />
    </div>
  );
};

export default Chest;
