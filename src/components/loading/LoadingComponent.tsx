import { FC, ReactElement } from 'react';

const LoadingComponent: FC = (): ReactElement => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex h-20 w-20 animate-[spin_5s_linear_infinite] items-center justify-center overflow-hidden">
        <img src="/imgs/loading.svg" alt="loading" />
      </div>
    </div>
  );
};

export default LoadingComponent;
