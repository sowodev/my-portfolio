import { NavLink } from "react-router-dom";

const Logo = function logo() {
  return (
    <div className="nav-button-logo flex-none">
      <NavLink to="/" className="logo">
        <div className="grid w-fit h-fit">
          <span className="relative w-auto h-auto font-logo2 px-2">
            Wendell Oliveira
          </span>
          <span className="absolute w-auto h-auto font-logo px-2">
            Wendell Oliveira
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
