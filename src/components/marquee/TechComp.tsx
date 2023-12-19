import { FC, ReactElement } from 'react';

type TechCompProps = {
  name: string;
};

const TechComp: FC<TechCompProps> = ({ name }: TechCompProps): ReactElement => {
  return (
    <div className="flex items-center justify-center gap-2 border-l border-gray-700 px-8">
      <img
        className="h-5 w-5"
        src={`/imgs/mystack/${name.toLowerCase()}.svg`}
        alt={name.toLowerCase()}
      />
      <span className="h-fit w-fit text-center text-lg font-light">{name}</span>
    </div>
  );
};

export default TechComp;
