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
};

const TimeTypeSelect: React.FC<Props> = ({ time_type, setTimeType }: Props): ReactElement => {
  return (
    <Select defaultValue="hours" onValueChange={(e): void => {}}>
      <SelectTrigger className={`font-[Lexend] p-0 font-light text-slate-500`}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent onClick={(e) => console.log(e)} className="font-[Lexend] font-light text-sm">
        <SelectItem value="hours">
          <span>Hours</span>
        </SelectItem>
        <SelectItem value="minutes">
          <span>Minutes</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TimeTypeSelect;
