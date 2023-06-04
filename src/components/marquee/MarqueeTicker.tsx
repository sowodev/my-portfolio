import TechComp from "./TechComp";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { GlobalContext } from "../commom/context/GlobalContext";

const Ticker = () => {
  const { set_dialog } = useContext(GlobalContext);

  return (
    <Marquee pauseOnHover speed={50} play={true}>
      <div className="mx-8 flex h-fit w-fit flex-row items-center justify-between">
        <span className="flex flex-row">
          <p className="font-[Lexend] text-lg font-bold">Looking for a job!</p>
          <p className="px-8 font-[Lexend] text-lg">
            Full Stack Web Developer, currently working with:
          </p>
        </span>
        <div className="h-full w-1 border-l border-gray-300" />
        <TechComp name={"TypeScript"} />
        <TechComp name={"React"} />
        <TechComp name={"Tailwind"} />
        {/* <TechComp name={"Html"} />
        <TechComp name={"Css"} /> */}
        <TechComp name={"Nest"} />
        <TechComp name={"MySQL"} />
        <TechComp name={"Docker"} />
        <TechComp name={"Linux"} />
        <TechComp name={"Github"} />
        {/* <TechComp name={"Python"} />
        <TechComp name={"Cpp"} />
        <TechComp name={"Java"} /> */}
        <span className="border-l border-gray-700 px-8 font-[Lexend] text-lg">
          For more information, please.
        </span>
        <button
          className="font-[Lexend] text-lg font-normal text-sky-400 underline hover:text-sky-600"
          onClick={() => set_dialog.setOpenDialog(true)}
        >
          Contact Me!
        </button>
      </div>
    </Marquee>
  );
};

const MarqueeTicker: React.FC = function marqueeTicker() {
  return (
    <div className="flex h-[45px] w-full items-center justify-center bg-amber-300">
      <Ticker />
    </div>
  );
};

export default MarqueeTicker;
