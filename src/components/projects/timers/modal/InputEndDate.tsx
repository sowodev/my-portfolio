import { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../hooks/types';

type Props = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
};

const InputEndDate: React.FC<Props> = function inputEndDate({
  register,
  errors,
}: Props): ReactElement {
  return (
    <div className="flex w-full flex-col items-center">
      <label
        htmlFor="end_date"
        className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
          false && 'text-slate-300'
        }`}
      >
        End Date
      </label>
      <input
        type="datetime-local"
        id="end_date"
        className={
          false
            ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 focus:border-sky-400 focus:outline-none`
            : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 focus:border-sky-400 focus:outline-none`
        }
        {...register('end_date', { required: true })}
      />
      {errors.end_date && <span className="text-xs text-red-500">End date is required</span>}
    </div>
  );
};

export default InputEndDate;
