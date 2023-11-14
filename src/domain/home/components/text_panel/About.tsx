import AppContext from '@context/AppContext';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';

const About: React.FC = function about(): React.ReactElement {
  const { contact_me, theme } = useContext(AppContext);

  return (
    <div className="flex h-full w-full flex-col justify-between items-center overflow-y-auto text-slate-700">
      <div className="prose prose-slate max-w-full mt-8">
        <p className="mb-2 text-justify font-[Lexend] text-md md:text-2xl lg:text-3xl font-light dark:text-white ">
          Software Engineers working with Full-stack Web Development, building secure, robust,
          reliable and scalable web applications.
        </p>
        <p className="my-2 lg:mt-2 text-sm md:text-base text-justify indent-5 font-[Lexend] font-light dark:text-slate-200">
          Hi there, my name is Wendell Oliveira, I am a Software Engineer. With over 3 years of
          experience as a Full-stack Web Developer. I am a completely passionate about computers and
          technology. I got a Science and Technology bachelor's degree with focus on Computer
          Science at the Federal University of São Paulo. I have been dedicating the past few years
          of my life mastering the art of building relentless software, so that I can make a huge
          difference wherever I go, guiding those who I work with to the highest standards when
          deploying high quality software.{' '}
          <span className="font-bold">
            My primary goal is to guide and assist you in overcoming the most challenging aspects of
            building state-of-the-art web applications.
          </span>
        </p>
      </div>
      <div className="flex flex-wrap w-full flex-row justify-end items-center gap-5 mb-8">
        <a
          className="flex p-3 flex-row items-center justify-center gap-3 rounded border border-[#f5f5f538] bg-[#ffffff3f] duration-300 ease-in-out hover:bg-white hover:bg-opacity-40 hover:shadow-md lg:hover:shadow-lg"
          href="https://www.linkedin.com/in/wendelloliveiradasilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-6 w-6" src={'/imgs/mystack/linkedin.svg'} alt="gh" />
        </a>
        <a
          className="flex p-3 flex-row items-center justify-center gap-3 rounded border border-[#f5f5f538] bg-[#ffffff3f] duration-300 ease-in-out hover:bg-white hover:bg-opacity-40 hover:shadow-md lg:hover:shadow-lg"
          href="https://www.github.com/sowodev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-6 w-6"
            src={
              theme.mode === 'dark' ? '/imgs/mystack/github-white.svg' : '/imgs/mystack/github.svg'
            }
            alt="gh"
          />
        </a>
        <button
          className="flex px-4 py-3 flex-row items-center justify-center gap-1 rounded bg-green-400 duration-300 ease-in-out hover:bg-green-500 hover:shadow-md lg:hover:shadow-lg"
          onClick={() => contact_me.setOpenDialog(true)}
        >
          <EnvelopeIcon className="h-6 w-6 stroke-slate-700 dark:stroke-white" />
          <span className="font-[Lexend] text-sm md:text-base stroke-slate-700 dark:text-slate-100">
            Hire Now!
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
