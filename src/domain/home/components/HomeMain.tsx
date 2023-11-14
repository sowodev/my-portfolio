import CreditsModal from '@components/credits-modal/CreditsModal';
import Chest from '@domain/home/components/Chest';
import TextPanel from '@domain/home/components/TextPanel';
import MoreDetailsModal from '@domain/home/components/text_panel/services_details/MoreDetailsModal';
import HomeContext from '@domain/home/context/HomeContext';
import { FC, ReactElement, RefObject, useContext, useEffect, useRef } from 'react';

const HomeMain: FC = (): ReactElement => {
  const home_ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { text_panel_controller } = useContext(HomeContext);

  //TODO: Not working
  useEffect(() => {
    if (home_ref.current) {
      home_ref.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [text_panel_controller.element]);

  return (
    <div
      className="flex flex-col h-full w-full overflow-y-scroll overflow-x-hidden lg:flex-row md:overflow-hidden"
      ref={home_ref}
    >
      <div className="flex w-full min-h-full md:min-h-[55%] lg:min-h-full justify-center">
        <TextPanel />
      </div>
      <div className="flex w-full min-h-full md:min-h-[45%] items-center justify-center">
        <div className="flex h-full w-full flex-col">
          <Chest />
        </div>
      </div>
      <CreditsModal />
      <MoreDetailsModal />
    </div>
  );
};

export default HomeMain;
