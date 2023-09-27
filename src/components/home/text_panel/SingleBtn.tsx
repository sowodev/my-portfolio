import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface SingleBtnProps {
  name: string;
  text_to_show: string;
  setTextToShow: (text_to_show: string) => void;
}

const SingleBtn: React.FC<SingleBtnProps> = ({
  name,
  text_to_show,
  setTextToShow,
}: SingleBtnProps): React.ReactElement => {
  return (
    <div className="flex relative h-full w-[33%] justify-center items-center group">
      <Transition
        as={Fragment}
        show={text_to_show === name}
        enter="transform transition ease-in-out duration-300"
        enterFrom="scale-50"
        enterTo="scale-100"
        leave="transform transition ease-in-out duration-300"
        leaveFrom="scale-100"
        leaveTo="scale-50"
      >
        <div
          className={
            text_to_show === name
              ? `flex absolute h-[80%] w-[85%] items-center justify-center rounded bg-slate-100 outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400 group-hover:cursor-not-allowed`
              : `flex absolute h-[80%] w-[85%] items-center justify-center rounded`
          }
        />
      </Transition>
      <button
        className={`flex absolute h-[80%] w-[85%] items-center justify-center rounded ${
          text_to_show === name
            ? `cursor-not-allowed`
            : `cursor-pointer group-hover:bg-black group-hover:bg-opacity-10`
        }`}
        onClick={(): void => setTextToShow(name)}
        disabled={text_to_show === name}
      >
        <span className="font-[Goldman] font-semibold sm:text-sm md:text-lg lg:text-2xl  text-slate-700 dark:text-white">
          {name}
        </span>
      </button>
    </div>
  );
};

export default SingleBtn;
