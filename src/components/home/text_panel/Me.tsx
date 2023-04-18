import { ReactElement } from "react";

const Me = function me(): ReactElement {
  return (
    <>
      <div className="flex flex-col w-full h-full text-white px-6 py-6 justify-between overflow-y-auto">
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead indent-5">
            In this section I talk about myself, my passions, my dreams and my
            goals.
          </p>
          <div className="italic text-sm text-slate-500">
            last update: 03/26/2023
          </div>
          <hr className="my-4" />
          <p className="py-4 indent-5">
            Hi there, my name is Wendell, but here in the digital world you can
            call me Sowodin, I'm a Software Engineer, Full Stack Software
            Developer and Programmer. I'm currently working with Full Stack Web
            Development, and I am guided by developing secure, robust, reliable
            and scalable systems.
          </p>
        </div>
        <div className="flex flex-row w-full gap-4 text-gray-600 justify-end pb-4">
          <a
            href="https://www.github.com/sowodin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-row gap-3 h-12 bg-white ring-1 ring-gray-300 hover:bg-gray-300 rounded justify-center items-center">
              <img
                className="h-7 w-7 ml-5"
                src="./src/assets/imgs/mystack/github.svg"
                alt="gh"
              />
              <span className="font-[Lexend] mr-5">See My Github</span>
            </button>
          </a>
          <button className="flex flex-row gap-3 h-12 bg-gradient-to-b from-sky-400 to-cyan-400 rounded justify-center items-center hover:from-sky-500 hover:to-cyan-500">
            <img
              className="h-7 w-7 ml-5"
              src="./src/assets/imgs/mail.svg"
              alt="gh"
            />{" "}
            <span className="font-[Lexend] mr-5 text-white">Contact Me</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Me;
