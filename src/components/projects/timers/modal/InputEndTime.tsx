import { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../hooks/types';

type Props = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
  dark: boolean;
};

const handleChange = (selectedOptions: any) => {
  console.log(selectedOptions);
};

const InputEndTime: React.FC<Props> = function inputEndTime({
  register,
  errors,
  dark,
}: Props): ReactElement {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-col w-[48%]">
        <label
          htmlFor="end_time"
          className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
            false && 'text-slate-300'
          }`}
        >
          Amount
        </label>
        <input
          type="number"
          id="end_time"
          placeholder="Enter the time!"
          className={
            false
              ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none`
              : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-slate-300 focus:border-sky-400 focus:outline-none`
          }
          {...register('end_time', { required: true })}
        />
        {errors.end_time && <span className="text-xs text-red-500">End time is required</span>}
      </div>
      <div className="flex flex-col w-[48%]">
        <label
          htmlFor="time"
          className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
            false && 'text-slate-300'
          }`}
        >
          Type
        </label>
        <select
          {...register('time')}
          className={`flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 bg-white font-[Lexend] font-light text-gray-500 placeholder:text-slate-300 focus:border-sky-400 focus:outline-none`}
          id="time-type"
          defaultValue={'hours'}
        >
          <option value="hours">Hours</option>
          <option value="minutes">Minutes</option>
        </select>
      </div>
    </div>
  );
};

export default InputEndTime;
