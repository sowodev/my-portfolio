import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface SingleBtnProps {
  name: string;
  text_to_show: 'About' | 'Tools' | 'Services';
  setTextToShow: (text_to_show: 'About' | 'Tools' | 'Services') => void;
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
              ? `flex absolute h-[80%] w-[85%] items-center justify-center rounded bg-slate-700 group-hover:cursor-not-allowed`
              : `flex absolute h-[80%] w-[85%] items-center justify-center rounded`
          }
        />
      </Transition>
      <button
        className={`flex absolute h-[80%] w-[85%] items-center justify-center rounded ${
          text_to_show === name ? `cursor-not-allowed` : `cursor-pointer group-hover:bg-slate-800`
        }`}
        onClick={(): void => setTextToShow(name as 'About' | 'Tools' | 'Services')}
        disabled={text_to_show === name}
      >
        <span className="sm:text-sm md:text-lg lg:text-2xl  text-slate-100">{name}</span>
      </button>
    </div>
  );
};

export default SingleBtn;
