import About from './text_panel/About';
import Tools from './text_panel/Tools';
import Services from './text_panel/Services';
import { HomeContext } from './HomeContext';
import React, { useContext } from 'react';
import BtnsGroup from './text_panel/BtnsGroup';

const TextPanel: React.FC = function textPanel(): React.ReactElement {
  const context_object = useContext(HomeContext);

  const text_panel_component: Map<string, React.ReactElement> = new Map([
    ['About', <About />],
    ['Tools', <Tools />],
    ['Services', <Services />],
  ]);

  return (
    <div className="mt-4 lg:mt-16 flex w-[95%] h-[95%] lg:h-4/5 md:w-3/4 flex-col items-center justify-center  rounded-lg bg-gradient-to-tl from-blue-400 to-sky-400 shadow-lg shadow-sky-300 ring-1 ring-slate-900/5 dark:from-sky-700 dark:to-blue-950 dark:shadow-sky-800">
      <div className="flex h-[10%] w-full items-center justify-center">
        <BtnsGroup
          text_to_show={context_object.text_to_show}
          setTextToShow={context_object.setTextToShow}
        />
      </div>
      <div className="h-[85%] w-[95%] rounded-lg">
        {text_panel_component.get(context_object.text_to_show)}
      </div>
    </div>
  );
};

export default TextPanel;
