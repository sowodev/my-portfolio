import Chest from "../components/home/Chest";
import TextPanel from "../components/home/TextPanel";
import { HomeContext } from "../components/home/HomeContext";
import { useState } from "react";
import CreditsModal from "../components/commom/CreditsModal";

const Home = function home() {
  const [text_to_show, setTextToShow] = useState("Me");
  const [open_credits, setOpenCredits] = useState(false);

  return (
    <>
      <HomeContext.Provider value={{ text_to_show, setTextToShow }}>
        <div className="flex basis-1/2 justify-center">
          <TextPanel />
        </div>
        <div className="flex basis-1/2 justify-center items-center">
          <div className="flex flex-col w-full h-full">
            <div className="flex basis-[96%] w-full">
              <Chest />
            </div>
            <div className="flex basis-[3%] w-full justify-end px-8">
              <button
                className="flex font-[Lexend] font-light text-sm text-slate-500 dark:text-slate-300"
                onClick={() => setOpenCredits(true)}
              >
                credits
              </button>
            </div>
          </div>
        </div>
        <CreditsModal
          open_credits={open_credits}
          setOpenCredits={setOpenCredits}
        />
      </HomeContext.Provider>
    </>
  );
};

export default Home;
