import { ReactElement } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../utils/shadcn-ui/select';
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
    <div className="flex w-[48%] flex-col items-center self-start">
      <label
        htmlFor="title"
        className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
          dark_mode && 'text-slate-300'
        }`}
      >
        Difficulty
      </label>
      <Select
        defaultValue="very_easy"
        onValueChange={(e): void => setDifficulty(e as DifficultyType)}
      >
        <SelectTrigger className={`font-[Lexend] font-light text-slate-500`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="font-[Lexend] font-light text-sm">
          <SelectItem value="very_easy">
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/green-dif.svg" alt="" />
              <span>Very Easy</span>
            </div>
          </SelectItem>
          <SelectItem value="easy">
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/yellow-dif.svg" alt="" />
              <span>Easy</span>
            </div>
          </SelectItem>
          <SelectItem value="medium">
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/orange-dif.svg" alt="" />
              <span>Medium</span>
            </div>
          </SelectItem>
          <SelectItem value="hard">
            <div className="flex flex-row w-full gap-2">
              <img className="w-6" src="/imgs/projects/tasks/red-dif.svg" alt="" />
              <span>Hard</span>
            </div>
          </SelectItem>
          <SelectItem value="very_hard">
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
