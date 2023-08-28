import { NavLink } from 'react-router-dom';

const Logo = function logo() {
  return (
    <NavLink to="/">
      <div className="flex flex-col items-center justify-center drop-shadow-xl">
        <img
          className="ms-2 h-7 w-52 md:h-7 md:w-64 lg:h-8 lg:w-64"
          src="/imgs/sowodev-logo.png"
          alt="logo"
        />
        <span className="font-[Lexend] text-xs text-white">
          Software Engineering and Consulting
        </span>
      </div>
    </NavLink>
  );
};

export default Logo;
