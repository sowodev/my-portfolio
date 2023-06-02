import Chest from "../components/home/Chest";
import TextPanel from "../components/home/TextPanel";
import { HomeContext } from "../components/home/HomeContext";
import { RefObject, useContext, useEffect, useRef, useState } from "react";
import CreditsModal from "../components/commom/credits-modal/CreditsModal";
import { GlobalContext } from "../components/commom/context/GlobalContext";

const Home = function home() {
  const [text_to_show, setTextToShow] = useState("Me");
  const { set_credits } = useContext(GlobalContext);
  const home_ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (home_ref.current) {
      home_ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [text_to_show]);

  return (
    <div
      className="flex flex-col h-full w-full overflow-y-auto lg:flex-row md:overflow-hidden"
      ref={home_ref}
    >
      <HomeContext.Provider value={{ text_to_show, setTextToShow }}>
        <div className="flex w-full min-h-full md:min-h-[55%] lg:min-h-full justify-center">
          <TextPanel />
        </div>
        <div className="flex w-full min-h-full md:min-h-[45%] items-center justify-center">
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
    </div>
  );
};

export default Home;
