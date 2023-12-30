import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Logo: FC = (): ReactElement => {
  return (
    <NavLink to="/">
      <div className="flex items-center justify-center gap-2">
        <img
          className="h-12 md:ms-2 shadow-[2px_2px_15px_-5px] shadow-slate-300"
          src="/imgs/sowodev-logo.svg"
          alt="logo"
        />
        <span className="font-[Goldman] text-[2.25rem] leading-none text-white self-end">
          sowodev
        </span>
      </div>
    </NavLink>
  );
};

export default Logo;
