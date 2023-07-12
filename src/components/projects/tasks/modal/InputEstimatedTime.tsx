import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FormValues, TimeType } from '../hooks/types';
import TimeTypeSelect from './TimeTypeSelect';

type Props = {
  time_type: string;
  setTimeType: React.Dispatch<React.SetStateAction<TimeType>>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
  dark_mode: boolean;
};

const InputEstimatedTime: React.FC<Props> = function inputEstimatedTime({
  time_type,
  setTimeType,
  register,
  errors,
  dark_mode,
}: Props): ReactElement {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-col w-[48%]">
        <label
          htmlFor="end_time"
          className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
            dark_mode && 'text-slate-300'
          }`}
        >
          Estimated Time
        </label>
        <input
          type="number"
          id="end_time"
          placeholder="Enter the time!"
          className={
            dark_mode
              ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none`
              : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-slate-200 focus:border-sky-400 focus:outline-none`
          }
          {...register('estimated_time', { required: true, max: 60, min: 0 })}
        />
        {errors.estimated_time &&
          (errors.estimated_time.type === 'max' ? (
            <span className="text-xs text-red-500">Too big number max is 60</span>
          ) : errors.estimated_time.type === 'min' ? (
            <span className="text-xs text-red-500">Too small number min is 0</span>
          ) : (
            <span className="text-xs text-red-500">Estimated time is required</span>
          ))}
      </div>
      <div className="flex flex-col w-[48%]">
        <label
          htmlFor="time"
          className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
            dark_mode && 'text-slate-300'
          }`}
        >
          In
        </label>
        <TimeTypeSelect time_type={time_type} setTimeType={setTimeType} />
      </div>
    </div>
  );
};

export default InputEstimatedTime;
