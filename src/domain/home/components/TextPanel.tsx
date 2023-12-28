import { Transition } from '@headlessui/react';
import { FC, Fragment, ReactElement, useContext, useEffect, useState } from 'react';
import HomeContext from '../context/HomeContext';
import About from './text_panel/About';
import Services from './text_panel/Services';
import BtnsGroup from './text_panel/TextPanelBtnsGroup';
import Tools from './text_panel/Tools';

const TextPanel: FC = function textPanel(): ReactElement {
  const { text_panel_controller } = useContext(HomeContext);
  const [prev_text, setPrevText] = useState('');

  const text_panel_component: Map<string, ReactElement> = new Map([
    ['About', <About />],
    ['Tools', <Tools />],
    ['Services', <Services />],
  ]);

  useEffect((): void => {
    setPrevText(text_panel_controller.element);
  }, [text_panel_controller.element]);

  return (
    <div className="mt-4 p-1 lg:mt-16 flex w-[95%] h-[95%] lg:h-4/5 md:w-3/4 lg:p-10 flex-col items-center justify-center rounded-lg bg-gradient-to-tl from-blue-400 to-sky-400 shadow-lg shadow-sky-300 ring-1 ring-slate-900/5 dark:from-sky-700 dark:to-blue-950 dark:shadow-sky-800">
      <div className="flex h-[10%] w-full items-center justify-center">
        <BtnsGroup
          text_to_show={text_panel_controller.element}
          setTextToShow={text_panel_controller.setElement}
        />
      </div>
      <div className="flex h-[90%] w-full rounded-lg overflow-y-auto justify-center items-center">
        <Transition
          as={Fragment}
          show={text_panel_controller.element === prev_text}
          key={text_panel_controller.element}
        >
          <Transition.Child
            className={`flex w-full h-full flex-col items-center justify-center`}
            enter="transition transform ease-in-out duration-300"
            enterFrom="scale-50"
            enterTo="scale-100"
            leave="transition transform ease-in-out duration-300"
            leaveFrom="scale-100"
            leaveTo="scale-50"
          >
            {text_panel_component.get(text_panel_controller.element)}
          </Transition.Child>
        </Transition>
      </div>
    </div>
  );
};

export default TextPanel;
