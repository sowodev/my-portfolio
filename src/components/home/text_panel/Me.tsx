import { ReactElement } from "react";

const Me = function me(): ReactElement {
  return (
    <>
      <div className="flex flex-col w-full h-full text-white px-6 py-6 justify-between overflow-y-auto">
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead">
            In this section I talk about myself, my passions, my dreams and my
            goals.
          </p>
          <div className="italic text-sm text-slate-500">
            last update: 03/26/2023
          </div>
          <hr className="my-4" />
          <p className="py-4">
            &emsp; Hi there, my name is Wendell, but here in the digital world
            you can call me Sowodin, I'm a Software Engineer, Full Stack
            Software Developer and Programmer. I'm currently working with Full
            Stack Web Development, and I am guided by developing secure, robust,
            reliable and scalable systems.
          </p>
        </div>
        <div className="flex flex-row w-full gap-4 text-gray-600 justify-end pb-4">
          <a
            href="https://www.github.com/sowodin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="h-12 bg-white ring-1 ring-gray-300 hover:bg-gray-300 rounded">
              <span className="font-[Lexend] py-8 px-8">See My Github</span>
            </button>
          </a>
          <button className="h-12 bg-sky-300 ring-1 ring-sky-500 hover:bg-sky-500 rounded">
            <span className="font-[Lexend] py-8 px-8">Contact Me</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Me;
