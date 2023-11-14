import StackComp from './StackComp';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Disclosure, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { TechStackData, element, stack } from './TechStackData';

const Tools: React.FC = function tools(): React.ReactElement {
  const [tech_stack, setTechStack] = useState<stack[]>(TechStackData);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <p className="w-full my-4 text-justify font-[Lexend] text-lg md:text-2xl lg:text-4xl font-light text-slate-700 dark:text-white">
        🛠️ Tech Stack
      </p>

      <div className="flex flex-col gap-4 w-full overflow-y-auto">
        {tech_stack.map((current: stack, index: number): React.ReactElement => {
          return (
            <Disclosure key={index}>
              {({ open, close }): React.ReactElement => (
                <>
                  <Disclosure.Button
                    className="flex min-h-[4rem] w-full items-center justify-between rounded border border-[#f5f5f538] bg-[#ffffff3f] hover:bg-white hover:bg-opacity-40 dark:text-slate-300"
                    onClick={() => {}}
                  >
                    <span className="ml-8 font-[Lexend] font-bold text-md lg:text-lg text-slate-700 dark:text-white">
                      {current.stack_name}
                    </span>
                    <ChevronDownIcon
                      className={`pointer-events-none mr-4 h-5 w-5 transform stroke-slate-700 duration-300 ease-linear dark:stroke-slate-300 ${
                        open ? `rotate-[-180deg]` : `rotate-0`
                      }`}
                    />
                  </Disclosure.Button>
                  <Transition
                    as={Fragment}
                    show={open}
                    enter="transition transform ease-in-out duration-300"
                    enterFrom="scale-50"
                    enterTo="scale-100"
                    leave="transition transform ease-in-out duration-300"
                    leaveFrom="scale-100"
                    leaveTo="scale-50"
                  >
                    <Disclosure.Panel className="prose prose-slate max-w-full mt-8 flex w-full flex-col">
                      {current.stack_value.map(
                        (inner_current: element, inner_index: number): React.ReactElement => {
                          return (
                            <div key={inner_index}>
                              <StackComp
                                name={inner_current.name}
                                icon={inner_current.icon}
                                quote={inner_current.quote}
                                desc={inner_current.desc}
                              />
                              <hr className="my-4 border-slate-500" />
                            </div>
                          );
                        },
                      )}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
