import { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/timers';

type Props = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
  dark_mode: boolean;
};

const InputEndDate: React.FC<Props> = function inputEndDate({
  register,
  errors,
  dark_mode,
}: Props): ReactElement {
  return (
    <div className="flex w-full flex-row justify-between items-center">
      <div className="flex flex-col basis-[48%]">
        <label
          htmlFor="end_date"
          className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
            dark_mode && 'text-slate-300'
          }`}
        >
          End Date
        </label>
        <input
          type="date"
          id="end_date"
          className={
            dark_mode
              ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none`
              : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-slate-300 focus:border-sky-400 focus:outline-none`
          }
          {...register('end_date', { required: true })}
        />
        {errors.end_date && <span className="text-xs text-red-500">End date is required</span>}
      </div>
      <div className="flex flex-col basis-[48%]">
        <label
          htmlFor="end_date_time"
          className={`w-full font-[Lexend] font-light ${dark_mode && 'text-slate-300'}`}
        >
          at ?
        </label>
        <input
          type="time"
          id="end_date_time"
          defaultValue={'00:00'}
          className={`flex h-[2rem] w-full border-b border-[#B0B0B0] ${
            dark_mode ? 'bg-slate-700 text-slate-300' : 'bg-white text-slate-500'
          }  indent-2 font-[Lexend] font-light placeholder:text-slate-500 focus:border-sky-400 focus:outline-none`}
          {...register('end_date_time')}
        />
      </div>
    </div>
  );
};

export default InputEndDate;
