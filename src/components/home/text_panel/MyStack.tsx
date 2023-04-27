import StackComp from "./StackComp";
import { StackData } from "./StackData";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

const MyStack = function myStack() {
  return (
    <>
      <div className="w-full h-full px-6 py-12 overflow-y-auto">
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead indent-5">
            In this section I talk about my stack, the technologies I use to
            build my projects.
          </p>
          <div className="italic text-sm text-slate-500">
            last update: 03/26/2023
          </div>
          {StackData.map((current, index) => {
            return (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full h-16 mt-4 bg-slate-100 border border-slate-400 rounded-lg justify-between items-center hover:bg-slate-200">
                      <span className="font-[Lexend] text-slate-500 ml-8">
                        {current.stack_name}
                      </span>
                      <div
                        className={
                          open ? "mr-4 origin-center rotate-180" : "mr-4"
                        }
                      >
                        <ChevronDownIcon className="h-5 w-5 stroke-[#333333ce] pointer-events-none" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex flex-col w-full mt-8 rounded-lg">
                      {current.stack_value.map((inner_current, inner_index) => {
                        return (
                          <div key={inner_index}>
                            <StackComp
                              name={inner_current.name}
                              icon={inner_current.icon}
                              quote={inner_current.quote}
                              desc={inner_current.desc}
                            />
                            <hr className="my-4" />
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
