import { cn } from '@utils/functions';
import { FC, ReactElement } from 'react';

interface MainThemeBtnProps {
  className?: string;
  onClick?: () => void;
  icon?: ReactElement;
  label?: string;
  labelClassName?: string;
}

const MainThemeBtn: FC<MainThemeBtnProps> = ({
  className,
  onClick,
  icon,
  label,
  labelClassName,
}: MainThemeBtnProps): ReactElement => {
  const btnClassName = cn(
    className,
    'flex px-4 py-3 flex-row items-center justify-center gap-1 rounded bg-green-400 duration-300 ease-in-out hover:bg-green-500 hover:shadow-md lg:hover:shadow-lg',
  );

  const btnLabelClassName = cn(
    labelClassName,
    'text-sm md:text-base text-slate-900 dark:text-slate-100',
  );

  return (
    <button className={btnClassName} onClick={(): void => onClick && onClick()}>
      {icon}
      <span className={btnLabelClassName}>{label}</span>
    </button>
  );
};

export default MainThemeBtn;
