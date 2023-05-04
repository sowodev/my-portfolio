import { ReactElement, useContext } from "react";
import { GlobalContext } from "../../commom/context/GlobalContext";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Me = function me(): ReactElement {
  const { set_dialog, set_dark } = useContext(GlobalContext);

  return (
    <>
      <div className="flex flex-col w-full h-full text-white px-6 py-2 justify-between overflow-y-auto">
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead indent-3 font-[Lexend] dark:text-white">
            This is the "Me" section, here you can find a brief description
            about myself.
          </p>
          <div className="text-sm text-slate-500 font-[Lexend] font-extralight dark:text-slate-300">
            last update: 03/26/2023
          </div>
          <hr className="my-4 dark:border-slate-500" />
          <p className="indent-5 font-[Lexend] font-light dark:text-slate-300">
            Hi there, my name is Wendell, I am a brazilian Software Engineer
            based in São José dos Campos - São Paulo. Currently working with
            Full Stack Software Development. I am a passionate about computers
            and technology, so I got a Science and Technology degree with focus
            on Computer Science at the Federal University of São Paulo, also
            aquired a little bit of international experience by living in New
            Zealed for about one year (where I could improve my english). I am
            guided by developing secure, robust, reliable and scalable systems.
            I am looking foward to contribute to an international company where
            I can improve my skills and learn new ones.
          </p>
        </div>
        <div className="flex flex-row w-full gap-8 text-gray-600 justify-end pb-4">
          <a
            className="flex flex-row gap-3 h-12 ring-1 ring-gray-300 rounded justify-center items-center hover:bg-gray-300 hover:shadow-lg hover:scale-110 ease-in-out duration-300 dark:hover:bg-slate-600"
            href="https://www.github.com/sowodin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-7 w-7 ml-5"
              src={
                set_dark.is_dark === "dark"
                  ? "./src/assets/imgs/mystack/github-white.svg"
                  : "./src/assets/imgs/mystack/github.svg"
              }
              alt="gh"
            />
            <span className="font-[Lexend] mr-5 dark:text-slate-300">
              See My Github
            </span>
          </a>
          <button
            className="flex flex-row gap-3 h-12 bg-gradient-to-b from-sky-400 to-cyan-400 rounded justify-center items-center hover:from-sky-500 hover:to-cyan-500 dark:hover:from-sky-400 dark:hover:to-cyan-400 hover:shadow-lg hover:scale-110 ease-in-out duration-300"
            onClick={() => set_dialog.setOpenDialog(true)}
          >
            <EnvelopeIcon className="h-7 w-7 ml-5 stroke-slate-100" />
            <span className="font-[Lexend] mr-5 text-white dark:text-slate-100">
              Contact Me!
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Me;
