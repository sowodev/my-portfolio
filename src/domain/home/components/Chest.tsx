import { FC, ReactElement, useContext } from 'react';
import HomeContext from '../context/HomeContext';

const Chest: FC = (): ReactElement => {
  const { text_panel_controller } = useContext(HomeContext);

  return (
    <div className="relative flex h-full items-end justify-center">
      <div className="absolute top-20 md:top-2 lg:top-28 flex w-[80%] h-1/4 lg:h-1/5 md:w-2/5 lg:w-1/2 flex-row">
        <div className="flex h-full flex-none basis-1/3 justify-center items-end">
          <button
            className="flex h-fit w-fit drop-shadow-lg"
            onClick={() => {
              text_panel_controller.setElement('Services');
            }}
          >
            <img
              className="w-20 h-5 md:w-20 md:h-20 grayscale object-cover drop-shadow-[0_0px_12px_rgba(56,189,248,0.6)]"
              src="/imgs/services.png"
              alt="Services"
            />
          </button>
        </div>
        <div className="flex h-full flex-none basis-1/3 justify-center items-center">
          <button
            className="flex h-fit w-fit origin-center drop-shadow-lg"
            onClick={() => {
              text_panel_controller.setElement('Tools');
            }}
          >
            <img
              className="w-20 h-5 md:w-28 md:h-28 object-cover drop-shadow-[0_13px_25px_rgba(251,191,36,0.8)]"
              src="/imgs/tools.png"
              alt="Tools"
            />
          </button>
        </div>
        <div className="flex h-full flex-none basis-1/3 justify-start items-end">
          <button
            className="flex h-fit w-fit origin-center drop-shadow-lg"
            onClick={() => {
              text_panel_controller.setElement('About');
            }}
          >
            <img
              className="w-20 h-5 md:w-16 md:h-16 grayscale object-cover drop-shadow-[0_0px_12px_rgba(52,211,153,0.6)]"
              src="/imgs/about.png"
              alt="About"
            />
          </button>
        </div>
      </div>
      <div className="mb-[30%] md:mb-0 md:h-3/4 md:w-[60%] lg:mb-[11%] lg:h-[52%] lg:w-[75%]">
        <img src="/imgs/chest.webp" alt="treasure chest" />
      </div>
    </div>
  );
};

export default Chest;
