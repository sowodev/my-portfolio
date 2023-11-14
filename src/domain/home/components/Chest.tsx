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
              className="w-20 h-5 md:w-24 md:h-7 drop-shadow"
              src={`/imgs/services.png`}
              alt={'Services'}
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
              className="w-20 h-5 md:w-24 md:h-7 drop-shadow"
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
              className="w-20 h-5 md:w-24 md:h-7 drop-shadow"
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
