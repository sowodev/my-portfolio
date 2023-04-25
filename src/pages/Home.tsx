import Chest from "../components/home/Chest";
import TextPanel from "../components/home/TextPanel";
import { HomeContext } from "../components/home/HomeContext";
import { useState } from "react";

const Home = function home() {
  const [text_to_show, setTextToShow] = useState("Me");

  return (
    <>
      <HomeContext.Provider value={{ text_to_show, setTextToShow }}>
        <div className="flex basis-1/2 justify-center">
          <TextPanel />
        </div>
        <div className="flex basis-1/2 justify-center items-center">
          <Chest />
        </div>
      </HomeContext.Provider>
    </>
  );
};

export default Home;
