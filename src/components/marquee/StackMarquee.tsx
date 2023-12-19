import AppContext from '@context/AppContext';
import { FC, ReactElement, useContext } from 'react';
import Marquee from 'react-fast-marquee';
import TechComp from './TechComp';

const StackMarquee: FC = (): ReactElement => {
  const { contact_me } = useContext(AppContext);

  const techs: string[] = [
    'TypeScript',
    'Next',
    'React',
    'Nest',
    'Node',
    'Tailwind',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Linux',
    'GitHub',
  ];

  return (
    <div className="flex h-[40px] w-full items-center justify-center bg-amber-300">
      <Marquee pauseOnHover speed={50} play={true}>
        <div className="mx-8 flex h-fit w-fit items-center justify-between">
          <span className="flex">
            <p className="text-lg font-bold">
              🥷{' '}
              <span className="text-red-500">Looking for a highly skilled software engineer?</span>{' '}
              🥷
            </p>
            <p className="px-8 text-lg">Full Stack Web Developer, currently working with:</p>
          </span>
          <div className="h-full w-1 border-l border-gray-300" />
          {techs.map((tech: string, index) => (
            <TechComp key={index} name={tech} />
          ))}
          <span className="border-l border-gray-700 px-8 text-lg">
            For more information.{' '}
            <button
              className="text-lg text-sky-400 underline hover:text-sky-600"
              onClick={() => contact_me.setOpenDialog(true)}
            >
              Contact Us!
            </button>
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default StackMarquee;
