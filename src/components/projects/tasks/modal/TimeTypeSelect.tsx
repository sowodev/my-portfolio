import { ReactElement } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../utils/shadcn-ui/components/select/select';
import { TimeType } from '../hooks/types';

type Props = {
  time_type: string;
  setTimeType: React.Dispatch<React.SetStateAction<TimeType>>;
  dark_mode: boolean;
};

const TimeTypeSelect: React.FC<Props> = ({
  time_type,
  setTimeType,
  dark_mode,
}: Props): ReactElement => {
  return (
    <Select
      defaultValue="hours"
      onValueChange={(e): void => {
        setTimeType(e as TimeType);
      }}
    >
      <SelectTrigger
        className={`h-[2rem] font-[Lexend] indent-2 p-0 font-light text-slate-500 ${
          dark_mode && 'text-slate-300'
        }`}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        onClick={(e) => console.log(e)}
        className={`font-[Lexend] font-light text-sm ${
          dark_mode && `bg-slate-700 border-slate-600`
        }`}
      >
        <SelectItem
          className={dark_mode ? 'text-slate-300 focus:bg-slate-600 focus:text-white' : ''}
          value="hours"
        >
          <span>Hours</span>
        </SelectItem>
        <SelectItem
          className={dark_mode ? 'text-slate-300 focus:bg-slate-600 focus:text-white' : ''}
          value="minutes"
        >
          <span>Minutes</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TimeTypeSelect;
