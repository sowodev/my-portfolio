import { ReactElement, useContext } from "react";
import { GlobalContext } from "../../commom/context/GlobalContext";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Me = function me(): ReactElement {
  const { set_dialog, set_dark } = useContext(GlobalContext);

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-y-auto px-6 lg:py-2 text-white">
      <div className="prose prose-slate mx-auto mt-4 lg:mt-16">
        <p className="mb-2 text-justify font-[Lexend] text-md md:text-2xl lg:text-3xl font-bold dark:text-white ">
          Software Engineer working with Fullstack Web Development, building
          secure, robust, reliable and scalable systems.
        </p>
        <p className="my-2 lg:mt-2 text-sm md:text-base text-justify indent-5 font-[Lexend] font-light dark:text-slate-300">
          Hi there, my name is Wendell Oliveira, I am a Brazilian Software
          Engineer based in São José dos Campos - São Paulo. With over 3 years
          of experience as Full stack Software Developer. I am a passionate
          about computers and technology, so I got a Science and Technology
          degree with focus on Computer Science at the Federal University of São
          Paulo, also acquired a little bit of international experience by
          living in New Zealed for about one year.{" "}
          <span className="font-bold">
            I am here to guide and build your way through the most difficult
            parts, when building state of the art web applications.
          </span>
        </p>
      </div>
      <div className="flex flex-wrap w-full flex-row justify-end gap-8 pb-4 lg:pe-8 text-gray-600">
        <a
          className="flex h-12 flex-row items-center justify-center gap-3 rounded ring-1 ring-slate-500 duration-300 ease-in-out hover:scale-110 hover:bg-black hover:bg-opacity-10 hover:shadow-md lg:hover:shadow-lg dark:hover:bg-black dark:hover:bg-opacity-10"
          href="https://www.linkedin.com/in/wendelloliveiradasilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="ml-2 h-5 w-5 md:ml-5 md:h-7 md:w-7"
            src={"/imgs/mystack/linkedin.svg"}
            alt="gh"
          />
          <span className="mr-2 md:mr-5 text-sm md:text-base font-[Lexend] font-bold text-slate-700 dark:text-white">
            LinkedIn
          </span>
        </a>
        <a
          className="flex h-12 flex-row items-center justify-center gap-3 rounded ring-1 ring-slate-500 duration-300 ease-in-out hover:scale-110 hover:bg-black hover:bg-opacity-10 hover:shadow-md lg:hover:shadow-lg dark:hover:bg-black dark:hover:bg-opacity-10"
          href="https://www.github.com/sowodin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="ml-2 h-5 w-5 md:ml-5 md:h-7 md:w-7"
            src={
              set_dark.is_dark === "dark"
                ? "/imgs/mystack/github-white.svg"
                : "/imgs/mystack/github.svg"
            }
            alt="gh"
          />
          <span className="mr-2 md:mr-5 text-sm md:text-base font-[Lexend] font-bold text-slate-700 dark:text-white">
            Github
          </span>
        </a>
        <button
          className="flex h-12 flex-row items-center justify-center gap-3 rounded bg-gradient-to-b from-green-400 to-emerald-400 duration-300 ease-in-out hover:scale-110 hover:from-green-500 hover:to-emerald-500 hover:shadow-md lg:hover:shadow-lg dark:hover:from-green-500 dark:hover:to-emerald-500"
          onClick={() => set_dialog.setOpenDialog(true)}
        >
          <EnvelopeIcon className="ml-2 h-5 w-5 md:ml-5 md:h-7 md:w-7 stroke-white" />
          <span className="mr-2 md:mr-5 font-[Lexend] text-sm md:text-base text-white dark:text-slate-100">
            Hire Me!
          </span>
        </button>
      </div>
    </div>
  );
};

export default Me;
