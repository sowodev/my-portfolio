import CreditsDialog from '@components/credits-dialog/CreditsDialog';
import StackMarquee from '@components/marquee/StackMarquee';
import Chest from '@domain/home/components/Chest';
import TextPanel from '@domain/home/components/TextPanel';
import MoreDetailsDialog from '@domain/home/components/text_panel/services_details/MoreDetailsDialog';
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
      className="flex flex-col relative h-full w-full overflow-y-scroll overflow-x-hidden md:overflow-hidden"
      ref={home_ref}
    >
      <StackMarquee />
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex w-full min-h-full md:min-h-[55%] lg:min-h-full justify-center items-center">
          <TextPanel />
        </div>
        <div className="flex w-full min-h-full md:min-h-[45%] items-center justify-center">
          <div className="flex h-full w-full flex-col">
            <Chest />
          </div>
        </div>
      </div>
      <CreditsDialog />
      <MoreDetailsDialog />
    </div>
  );
};

export default HomeMain;
