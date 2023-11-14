import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Logo: FC = (): ReactElement => {
  return (
    <NavLink to="/">
      <div className="flex flex-col items-center justify-center drop-shadow-xl">
        <img
          className="h-10 w-52 md:w-64 lg:w-60 md:ms-2"
          src="/imgs/sowodev-logo.png"
          alt="logo"
        />
      </div>
    </NavLink>
  );
};

export default Logo;
