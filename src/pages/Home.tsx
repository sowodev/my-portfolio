import Chest from "../components/home/Chest";
import TextPanel from "../components/home/TextPanel";
import { HomeContext } from "../components/home/HomeContext";
import { useContext, useState } from "react";
import CreditsModal from "../components/commom/credits-modal/CreditsModal";
import { GlobalContext } from "../components/commom/context/GlobalContext";

const Home = function home() {
  const [text_to_show, setTextToShow] = useState("Me");
  const { set_credits } = useContext(GlobalContext);

  return (
    <>
      <HomeContext.Provider value={{ text_to_show, setTextToShow }}>
        <div className="flex basis-1/2 justify-center">
          <TextPanel />
        </div>
        <div className="flex basis-1/2 items-center justify-center">
          <div className="flex h-full w-full flex-col">
            <div className="flex w-full basis-[96%]">
              <Chest />
            </div>
            <div className="flex w-full basis-[3%] justify-end px-8">
              <button
                className="flex font-[Lexend] text-xs font-light text-slate-500 dark:text-slate-300"
                onClick={() => set_credits.setOpenCredits(true)}
              >
                credits
              </button>
            </div>
          </div>
        </div>
        <CreditsModal />
      </HomeContext.Provider>
    </>
  );
};

export default Home;
