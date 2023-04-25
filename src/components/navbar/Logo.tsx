import { NavLink } from "react-router-dom";

const Logo = function logo() {
  return (
    <div className="flex w-fit h-full flex-none justify-center items-center">
      <NavLink to="/" className="logo">
        <div className="grid w-[313px] h-[70px] place-content-center drop-shadow-lg">
          <img src="/src/assets/imgs/logo.png" alt="logo" />
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
