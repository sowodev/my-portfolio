import About from './text_panel/About';
import Tools from './text_panel/Tools';
import Services from './text_panel/Services';
import { HomeContext } from './HomeContext';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import BtnsGroup from './text_panel/TextPanelBtnsGroup';
import { Transition } from '@headlessui/react';

const TextPanel: React.FC = function textPanel(): React.ReactElement {
  const context_object = useContext(HomeContext);
  const [prev_text, setPrevText] = useState('');

  const text_panel_component: Map<string, React.ReactElement> = new Map([
    ['About', <About />],
    ['Tools', <Tools />],
    ['Services', <Services />],
  ]);

  useEffect((): void => {
    setPrevText(context_object.text_to_show);
  }, [context_object.text_to_show]);

  return (
    <div className="mt-4 lg:mt-16 flex w-[95%] h-[95%] lg:h-4/5 md:w-3/4 flex-col items-center justify-center  rounded-lg bg-gradient-to-tl from-blue-400 to-sky-400 shadow-lg shadow-sky-300 ring-1 ring-slate-900/5 dark:from-sky-700 dark:to-blue-950 dark:shadow-sky-800">
      <div className="flex h-[10%] w-full items-center justify-center">
        <BtnsGroup
          text_to_show={context_object.text_to_show}
          setTextToShow={context_object.setTextToShow}
        />
      </div>
      <div className="h-[85%] w-[95%] rounded-lg overflow-y-auto">
        <Transition
          as={Fragment}
          show={context_object.text_to_show === prev_text}
          key={context_object.text_to_show}
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
            {text_panel_component.get(context_object.text_to_show)}
          </Transition.Child>
        </Transition>
      </div>
    </div>
  );
};

export default TextPanel;
