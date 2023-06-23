import { ReactElement } from 'react';
import {
  Controller,
  useForm,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Control,
} from 'react-hook-form';
import Select from 'react-select';

type Props = {
  control: Control<FieldValues, any>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  dark: boolean;
};

type Option = {
  value: string;
  label: string;
};

const InputEndTime: React.FC<Props> = function inputEndTime({
  control,
  register,
  errors,
  dark,
}: Props): ReactElement {
  const options: Option[] = [
    { value: 'hours', label: 'Hours' },
    { value: 'minutes', label: 'Minutes' },
  ];

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
        <Controller
          name="time"
          control={control}
          render={({ field }): ReactElement => (
            <Select
              {...field}
              className="w-full rounded font-[Lexend] font-light"
              options={options}
              defaultValue={options[0]}
              styles={{
                control: (provided) => ({
                  ...provided,
                  color: dark ? '#cbd5e1' : '#333333ce',
                  border: dark ? '1px solid  #64748b' : '1px solid #cbd5e1',
                  backgroundColor: dark ? '#1e293b' : '#ffffff',
                  '&:hover': {
                    backgroundColor: dark ? '#334155' : '#ffffff',
                  },
                }),
                menu: (provided) => ({
                  ...provided,
                  color: dark ? '#cbd5e1' : '#333333ce',
                  border: dark ? '1px solid #64748b' : '1px solid #cbd5e1',
                  backgroundColor: dark ? '#1e293b' : '#ffffff',
                  boxShadow: dark
                    ? '0px 5px 8px rgba(100, 116, 139, 0.5)'
                    : '0px 4px 8px rgba(0, 0, 0, 0.15)',
                  overflow: 'hidden',
                }),
                // 30, 41, 59,
                option: (provided, state) => ({
                  ...provided,
                  color: dark ? '#cbd5e1' : '#333333ce',
                  backgroundColor: dark ? '#1e293b' : '#ffffff',
                  '&:hover': {
                    backgroundColor: dark ? '#334155' : '#f3f4f6',
                  },
                }),
                input: (provided) => ({
                  ...provided,
                  color: dark ? '#cbd5e1' : '#333333ce',
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: dark ? '#64748b' : '#cbd5e1',
                }),
                clearIndicator: (provided) => ({
                  ...provided,
                  color: dark ? '#64748b' : '#cbd5e1',
                  '&:hover': {
                    color: dark ? '#cbd5e1' : '#64748b',
                  },
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: dark ? '#64748b' : '#cbd5e1',
                  '&:hover': {
                    color: dark ? '#cbd5e1' : '#64748b',
                  },
                }),
                indicatorSeparator: (provided) => ({
                  ...provided,
                  backgroundColor: dark ? '#64748b' : '#cbd5e1',
                }),
                noOptionsMessage: (provided) => ({
                  ...provided,
                  color: dark ? '#cbd5e1' : '#333333ce',
                }),
                multiValue: (provided) => ({
                  ...provided,
                  color: dark ? '#4b5563' : '#333333ce',
                  backgroundColor: dark ? '#cbd5e1' : '#e2e8f0',
                }),
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default InputEndTime;
