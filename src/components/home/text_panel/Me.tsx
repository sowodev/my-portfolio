import { ReactElement, useContext } from "react";
import { GlobalContext } from "../../commom/context/GlobalContext";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Me = function me(): ReactElement {
  const { set_dialog, set_dark } = useContext(GlobalContext);

  return (
    <>
      <div className="flex h-full w-full flex-col justify-between overflow-y-auto px-6 py-2 text-white">
        <div className="prose prose-slate mx-auto mt-4">
          <p className="lead indent-3 font-[Lexend] text-black dark:text-white">
            This is the "Me" section, here you can find a brief description
            about myself.
          </p>
          <div className="font-[Lexend] text-sm font-extralight dark:text-slate-300">
            last update: 03/26/2023
          </div>
          <hr className="my-4 border-white dark:border-slate-500" />
          <p className="indent-5 font-[Lexend] font-light dark:text-slate-300">
            Hi there, my name is Wendell, I am a brazilian Software Engineer
            based in São José dos Campos - São Paulo. With over 3 years of
            experience as Full Stack Software Developer. I am a passionate about
            computers and technology, so I got a Science and Technology degree
            with focus on Computer Science at the Federal University of São
            Paulo, also aquired a little bit of international experience by
            living in New Zealed for about one year (where I could improve my
            english). I am guided by developing secure, robust, reliable and
            scalable systems. I am looking foward to contribute to an
            international company where I can improve my skills and learn new
            ones.
          </p>
        </div>
        <div className="flex w-full flex-row justify-end gap-8 pb-4 text-gray-600">
          <a
            className="flex h-12 flex-row items-center justify-center gap-3 rounded ring-1 ring-gray-100 duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 hover:shadow-lg dark:hover:bg-slate-600"
            href="https://www.github.com/sowodin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="ml-5 h-7 w-7"
              src={
                set_dark.is_dark === "dark"
                  ? "./src/assets/imgs/mystack/github-white.svg"
                  : "./src/assets/imgs/mystack/github.svg"
              }
              alt="gh"
            />
            <span className="mr-5 font-[Lexend] dark:text-slate-300">
              Github
            </span>
          </a>
          <button
            className="flex h-12 flex-row items-center justify-center gap-3 rounded bg-gradient-to-b from-sky-400 to-cyan-400 duration-300 ease-in-out hover:scale-110 hover:from-sky-500 hover:to-cyan-500 hover:shadow-lg dark:hover:from-sky-400 dark:hover:to-cyan-400"
            onClick={() => set_dialog.setOpenDialog(true)}
          >
            <EnvelopeIcon className="ml-5 h-7 w-7 stroke-slate-100" />
            <span className="mr-5 font-[Lexend] text-white dark:text-slate-100">
              Hire Me!
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Me;
