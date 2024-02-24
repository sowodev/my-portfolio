import React, { useState } from 'react';
import StackComp from './StackComp';
import { TechStackData, element, stack } from './TechStackData';

const Tools: React.FC = function tools(): React.ReactElement {
  const [tech_stack, setTechStack] = useState<stack[]>(TechStackData);

  return (
    <div className="flex relative w-full h-full mt-4 justify-center items-center bg-slate-900 rounded-lg">
      <div className="flex absolute -top-[1px] h-px w-[95%] rounded-lg bg-gradient-to-r from-sky-300/30 via-sky-300 to-sky-300/30" />
      <div className="flex flex-wrap w-full h-full p-4 overflow-y-auto">
        {tech_stack.map((stack_type: stack, index: number): React.ReactElement => {
          return (
            <div key={index} className="flex flex-col w-full">
              <h1 className="my-2 text-center text-lg text-sky-300 border-y border-slate-700 bg-slate-800">
                {stack_type.stack_name}
              </h1>
              <div className="flex flex-wrap w-full h-fit gap-2">
                {stack_type.stack_value.map(
                  (tech: element, inner_index: number): React.ReactElement => {
                    return <StackComp key={inner_index} name={tech.name} icon={tech.icon} />;
                  },
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute -bottom-[1px] h-px w-[95%] rounded-lg bg-gradient-to-r from-sky-300/30 via-sky-300 to-sky-300/30" />
    </div>
  );
};

export default Tools;
