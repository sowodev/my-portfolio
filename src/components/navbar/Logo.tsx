import { NavLink } from "react-router-dom";

const Logo = function logo() {
  return (
    <NavLink to="/">
      <div className="flex items-center justify-center">
        <img
          className="h-7 w-52 md:h-7 md:w-64 lg:h-9 lg:w-80"
          src="/imgs/logo.png"
          alt="logo"
        />
      </div>
    </NavLink>
  );
};

export default Logo;
