import StackComp from "./StackComp";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure, Transition } from "@headlessui/react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

type stack = {
  name: string;
  icon: string;
  quote: string;
  desc: string;
};

type stackDTO = {
  created_at: string;
  description: string;
  id: number;
  logo_name: string;
  name_tech: string;
  quote: string;
  type_stack: string;
  updated_at: string;
};

const setNewStack = (stacks: stackDTO[]): Map<string, stack[]> => {
  let tech_stack: Map<string, stack[]> = new Map();

  stacks.forEach((current) => {
    const stack: stack = {
      name: current.name_tech,
      icon: current.logo_name,
      quote: current.quote,
      desc: current.description,
    };

    if (tech_stack.has(current.type_stack))
      tech_stack.get(current.type_stack)!.push(stack);
    else tech_stack.set(current.type_stack, [stack]);
  });

  return tech_stack;
};

const MyStack = function myStack() {
  const [tech_stack, setTechStack] = useState<Map<string, stack[]>>(new Map());

  const query: UseQueryResult<any, unknown> = useQuery({
    queryKey: ["stack"],
    queryFn: () =>
      axios.get("http://localhost:3000/tech-stack/").then((res) => {
        setTechStack(setNewStack(res.data));

        return res.data;
      }),
  });

  if (query.isLoading) return console.log("Loading...");

  if (query.error) return console.log("An error has occurred: " + query.error);

  return (
    <>
      <div className="w-full h-full px-6 py-2 overflow-y-auto">
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead indent-3 font-[Lexend] dark:text-white">
            This is the "MyStack" section, here I try to show the main tools,
            libraries and frameworks I have been using in my full stack web
            projects.
          </p>
          <div className="text-sm text-slate-500 font-[Lexend] font-extralight dark:text-slate-300">
            last update: 03/26/2023
          </div>
          <hr className="my-4 dark:border-slate-500" />

          {[...tech_stack].map((current, index) => {
            return (
              <Disclosure key={index}>
                {({ open, close }) => (
                  <>
                    <Disclosure.Button
                      className="flex w-full h-16 mt-4 border border-slate-400 rounded justify-between items-center hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-300"
                      onClick={() => {}}
                    >
                      <span className="font-[Lexend] text-slate-500 ml-8 dark:text-slate-300">
                        {current[0].charAt(0).toUpperCase() +
                          current[0].slice(1)}
                      </span>
                      <ChevronDownIcon
                        className={`h-5 w-5 mr-4 stroke-[#333333ce] pointer-events-none transform duration-300 ease-linear dark:stroke-slate-300 ${
                          open ? `rotate-[-180deg]` : `rotate-0`
                        }`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-300 ease-out"
                      enterFrom="transform scale-90 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-200 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-90 opacity-0"
                    >
                      <Disclosure.Panel className="flex flex-col w-full mt-8">
                        {current[1].map((inner_current, inner_index) => {
                          return (
                            <div key={inner_index}>
                              <StackComp
                                name={inner_current.name}
                                icon={inner_current.icon}
                                quote={inner_current.quote}
                                desc={inner_current.desc}
                              />
                              <hr className="my-4 dark:border-slate-500" />
                            </div>
                          );
                        })}
                      </Disclosure.Panel>
                    </Transition>
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
