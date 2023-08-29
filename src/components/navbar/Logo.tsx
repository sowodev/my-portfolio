import { NavLink } from 'react-router-dom';

const Logo = function logo() {
  return (
    <NavLink to="/">
      <div className="flex flex-col items-center justify-center drop-shadow-xl">
        <img className="h-9 w-52 md:w-64 lg:w-64 md:ms-2" src="/imgs/sowodev-logo.png" alt="logo" />
        <span className="hidden md:flex md:ms-0 font-[Lexend] text-xs text-white">
          Software Engineering and Consulting
        </span>
      </div>
    </NavLink>
  );
};

export default Logo;
