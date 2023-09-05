import { useContext } from 'react';
import { GlobalContext } from '../../commom/context/GlobalContext';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const About: React.FC = function about(): React.ReactElement {
  const { set_dialog, set_dark } = useContext(GlobalContext);

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-y-auto px-6 lg:py-2 text-slate-700">
      <div className="prose prose-slate mx-auto mt-4 md:mt-3">
        <p className="mb-2 text-justify font-[Lexend] text-md md:text-2xl lg:text-3xl font-bold dark:text-white ">
          Software Engineer working with Full Stack Web Development, building secure, robust,
          reliable and scalable systems.
        </p>
        <p className="my-2 lg:mt-2 text-sm md:text-base text-justify indent-5 font-[Lexend] font-light dark:text-slate-200">
          Hi there, my name is Wendell Oliveira, I am a Brazilian Software Engineer based in São
          José dos Campos - São Paulo. With over 3 years of experience as a Full Stack Software
          Developer. I am a completely passionate about computers and technology. I got a Science
          and Technology bachelor's degree with focus on Computer Science at the Federal University
          of São Paulo. I have been dedicating the past few years of my life mastering the art of
          building relentless software, so that I can make a huge difference wherever I go, guiding
          those who I work with to the highest standards when deploying high quality software.{' '}
          <span className="font-bold">
            My primary goal is to guide and assist you in overcoming the most challenging aspects of
            building state-of-the-art web applications.
          </span>
        </p>
      </div>
      <div className="flex flex-wrap w-full flex-row justify-end gap-8 pb-4 lg:pe-8 text-gray-600">
        <a
          className="flex h-12 flex-row items-center justify-center gap-3 rounded border border-[#f5f5f538] bg-[#ffffff3f] duration-300 ease-in-out hover:scale-110 hover:bg-white hover:bg-opacity-40 hover:shadow-md lg:hover:shadow-lg"
          href="https://www.linkedin.com/in/wendelloliveiradasilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="m-2 h-5 w-5 md:m-3 md:h-7 md:w-7"
            src={'/imgs/mystack/linkedin.svg'}
            alt="gh"
          />
        </a>
        <a
          className="flex h-12 flex-row items-center justify-center gap-3 rounded border border-[#f5f5f538] bg-[#ffffff3f] duration-300 ease-in-out hover:scale-110 hover:bg-white hover:bg-opacity-40 hover:shadow-md lg:hover:shadow-lg"
          href="https://www.github.com/sowodev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="m-2 h-5 w-5 md:m-3 md:h-7 md:w-7"
            src={
              set_dark.is_dark === 'dark'
                ? '/imgs/mystack/github-white.svg'
                : '/imgs/mystack/github.svg'
            }
            alt="gh"
          />
        </a>
        <button
          className="flex h-12 flex-row items-center justify-center gap-3 rounded bg-green-400 duration-300 ease-in-out hover:scale-110 hover:bg-green-500 hover:shadow-md lg:hover:shadow-lg"
          onClick={() => set_dialog.setOpenDialog(true)}
        >
          <EnvelopeIcon className="ml-2 h-5 w-5 md:ml-5 md:h-7 md:w-7 stroke-white" />
          <span className="mr-2 md:mr-5 font-[Lexend] text-sm md:text-base text-white dark:text-slate-100">
            Hire Us!
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
