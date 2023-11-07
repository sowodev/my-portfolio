import DatePicker from '@libs/shadcn-ui/components/datepicker/DatePicker';
import { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../hooks/types';

type Props = {
  due_date: Date | undefined;
  setDueDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
  dark_mode: boolean;
};

const InputDueDate: React.FC<Props> = function inputDueDate({
  due_date,
  setDueDate,
  register,
  errors,
  dark_mode,
}: Props): ReactElement {
  return (
    <div className="flex w-full flex-row justify-between items-center">
      <div className="flex flex-col basis-[58%]">
        <label
          htmlFor="due_date"
          className={`w-full font-[Lexend] font-light ${dark_mode && 'text-slate-300'}`}
        >
          Due Date
        </label>
        <DatePicker
          due_date={due_date}
          setDueDate={setDueDate}
          className={`h-[2rem] w-full rounded-none border-b border-[#B0B0B0] ${
            dark_mode ? 'bg-slate-700 text-gray-300' : 'bg-transparent text-gray-500'
          } indent-2 font-[Lexend] font-light placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`}
          dark_mode={dark_mode}
        />
      </div>
      <div className="flex flex-col basis-[38%]">
        <label
          htmlFor="due_date_time"
          className={`w-full font-[Lexend] font-light ${dark_mode && 'text-slate-300'}`}
        >
          At
        </label>
        <input
          type="time"
          id="due_date_time"
          defaultValue={'00:00'}
          className={`flex h-[2rem] w-full border-b border-[#B0B0B0] ${
            dark_mode ? 'bg-slate-700 text-slate-300' : 'bg-white text-slate-500'
          }  indent-2 font-[Lexend] font-light placeholder:text-slate-500 focus:border-sky-400 focus:outline-none`}
          {...register('due_date_time')}
        />
      </div>
    </div>
  );
};

export default InputDueDate;
