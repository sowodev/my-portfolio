import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ReactElement } from 'react';

type Props = {
  timer_type: 'end_by_date' | 'end_by_time';
  setTimerType: React.Dispatch<React.SetStateAction<'end_by_date' | 'end_by_time'>>;
  reset: () => void;
};

const TypeBtnGroup: React.FC<Props> = function typeBtnGroup({
  timer_type,
  setTimerType,
  reset,
}: Props): ReactElement {
  return (
    <div
      role="group"
      className="flex flex-row h-10 w-full font-[Lexend] text-sm font-light my-2 bg-sky-300 justify-center items-center rounded"
    >
      <button
        className={
          timer_type === 'end_by_time'
            ? 'flex flex-row gap-1 basis-1/2 h-full justify-center items-center rounded-l bg-sky-400 cursor-not-allowed'
            : 'flex flex-row gap-1 basis-1/2 h-full justify-center items-center rounded-l hover:bg-black hover:bg-opacity-5'
        }
        onClick={(e) => {
          reset();
          setTimerType('end_by_time');
        }}
        disabled={timer_type === 'end_by_time'}
      >
        <ClockIcon className="h-5 stroke-white" />
        <span className="text-white">Time to End</span>
      </button>
      <div className="w-0 h-[80%] border-s border-sky-500" />
      <button
        className={
          timer_type === 'end_by_date'
            ? 'flex flex-row gap-1 basis-1/2 h-full justify-center items-center rounded-r bg-sky-400 cursor-not-allowed'
            : 'flex flex-row gap-1 basis-1/2 h-full justify-center items-center rounded-r hover:bg-black hover:bg-opacity-5'
        }
        onClick={() => {
          reset();
          setTimerType('end_by_date');
        }}
        disabled={timer_type === 'end_by_date'}
      >
        <CalendarIcon className="h-5 stroke-white" />
        <span className="text-white">End Date</span>
      </button>
    </div>
  );
};

export default TypeBtnGroup;
