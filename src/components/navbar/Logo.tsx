import { NavLink } from "react-router-dom";

const Logo = function logo() {
  return (
    <div className="flex h-full w-fit flex-none items-center justify-center">
      <NavLink to="/" className="logo">
        <div className="grid h-[70px] w-[313px] place-content-center drop-shadow-lg">
          <img src="/imgs/logo.png" alt="logo" />
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
