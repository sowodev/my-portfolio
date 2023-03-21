import Chest from "../components/home/Chest";
import TextPanel from "../components/home/TextPanel";

const Home = function home() {
  return (
    <>
      <div className="flex basis-1/2 justify-center items-center">
        <TextPanel />
      </div>
      <div className="flex basis-1/2 justify-center items-center">
        <Chest />
      </div>
    </>
  );
};

export default Home;
