import { ReactElement } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../libs/shadcn-ui/components/select/select';
import { DifficultyType } from '../hooks/types';

type Props = {
  setDifficulty: (difficulty: DifficultyType) => void;
  dark_mode: boolean;
};

const InputDifficulty: React.FC<Props> = function inputDifficulty({
  setDifficulty,
  dark_mode,
}: Props): ReactElement {
  return (
    <div className="flex w-[58%] flex-col items-center self-start">
      <label
        htmlFor="title"
        className={`w-full font-[Lexend] font-light ${dark_mode && 'text-slate-300'}`}
      >
        Difficulty
      </label>
      <Select
        defaultValue="very_easy"
        onValueChange={(e: string): void => setDifficulty(e as DifficultyType)}
      >
        <SelectTrigger
          className={`h-[2rem] font-[Lexend] p-0 font-light text-slate-500 ${
            dark_mode && 'text-slate-300'
          }`}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          className={`font-[Lexend] font-light text-sm ${
            dark_mode && `bg-slate-700 border-slate-600`
          }`}
        >
          <SelectItem
            className={dark_mode ? 'text-slate-300 focus:bg-slate-600 focus:text-white' : ''}
            value="very_easy"
          >
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/green-dif.svg" alt="" />
              <span>Very Easy</span>
            </div>
          </SelectItem>
          <SelectItem
            className={dark_mode ? 'text-slate-300 focus:bg-slate-600 focus:text-white' : ''}
            value="easy"
          >
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/yellow-dif.svg" alt="" />
              <span>Easy</span>
            </div>
          </SelectItem>
          <SelectItem
            className={dark_mode ? 'text-slate-300 focus:bg-slate-600 focus:text-white' : ''}
            value="medium"
          >
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/orange-dif.svg" alt="" />
              <span>Medium</span>
            </div>
          </SelectItem>
          <SelectItem
            className={dark_mode ? 'text-slate-300 focus:bg-slate-600 focus:text-white' : ''}
            value="hard"
          >
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/red-dif.svg" alt="" />
              <span>Hard</span>
            </div>
          </SelectItem>
          <SelectItem
            className={dark_mode ? 'text-slate-300 focus:bg-slate-600 focus:text-white' : ''}
            value="very_hard"
          >
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/purple-dif.svg" alt="" />
              <span>Very Hard</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InputDifficulty;
