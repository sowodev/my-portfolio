import { useState } from "react";
import StackComp from "./StackComp";
import { StackData } from "./StackData";
import { StackData_2 } from "./StackData_2";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

const MyStack = function myStack() {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <div className="w-full h-full px-6 py-12 overflow-y-auto">
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead">
            In this section I talk about my stack, the technologies I use to
            build my projects.
          </p>
          <div className="italic text-sm text-slate-500">
            last update: 03/26/2023
          </div>
          {StackData_2.map((current, index) => {
            return (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full h-16 mt-8 bg-slate-100 border border-slate-400 rounded-lg justify-between items-center hover:bg-slate-200">
                      <span className="font-[Lexend] text-slate-500 ml-8">
                        A
                      </span>
                      <div
                        className={
                          collapse ? "mr-4 origin-center rotate-180" : "mr-4"
                        }
                      >
                        <ChevronDownIcon className="h-5 w-5 stroke-[#333333ce] pointer-events-none" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex flex-col w-full h-24 rounded-lg">
                      {StackData.map((current, index) => {
                        return (
                          <div key={index}>
                            <hr className="my-4" />
                            <StackComp
                              name={current.name}
                              icon={current.icon}
                              quote={current.quote}
                              desc={current.desc}
                            />
                          </div>
                        );
                      })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyStack;
