import { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/tasks';

type Props = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
  dark_mode: boolean;
};

const InputTitle: React.FC<Props> = function inputTitle({
  register,
  errors,
  dark_mode,
}: Props): ReactElement {
  return (
    <div className="flex w-full flex-col items-center">
      <label
        htmlFor="title"
        className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
          dark_mode && 'text-slate-300'
        }`}
      >
        Title
      </label>
      <input
        type="text"
        id="title"
        placeholder="Task title!"
        className={
          dark_mode
            ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none`
            : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-slate-200 focus:border-sky-400 focus:outline-none`
        }
        {...register('title', { required: true })}
      />
      {errors.title && <span className="text-xs text-red-500">Title is required</span>}
    </div>
  );
};

export default InputTitle;
