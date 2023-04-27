import TechComp from "./TechComp";
import Marquee from "react-fast-marquee";

const Ticker = () => {
  return (
    <Marquee pauseOnHover speed={25} play={true}>
      <div className="flex flex-row w-fit h-fit justify-between items-center mx-8">
        <span className="flex flex-row">
          <p className="font-[Lexend] font-bold text-lg">Looking for a job!</p>
          <p className="font-[Lexend] text-lg px-8">
            Full Stack Web Developer, currently working with:
          </p>
        </span>
        <div className="w-1 h-full border-l border-gray-300" />
        <TechComp name={"TypeScript"} />
        <TechComp name={"React"} />
        <TechComp name={"Tailwind"} />
        <TechComp name={"Html"} />
        <TechComp name={"Css"} />
        <TechComp name={"Nest"} />
        <TechComp name={"MySQL"} />
        <TechComp name={"Docker"} />
        <TechComp name={"Linux"} />
        <TechComp name={"Github"} />
        <TechComp name={"Python"} />
        <TechComp name={"Cpp"} />
        <TechComp name={"Java"} />
        <span className="font-[Lexend] text-lg px-8 border-l border-gray-700">
          For more information, please.
        </span>
        <button className="font-[Lexend] text-lg font-normal text-sky-400 underline hover:text-sky-600">
          Contact Me!
        </button>
      </div>
    </Marquee>
  );
};

const MarqueeTicker: React.FC = function marqueeTicker() {
  return (
    <div className="flex w-full h-[45px] bg-amber-300 justify-center items-center">
      <Ticker />
    </div>
  );
};

export default MarqueeTicker;
