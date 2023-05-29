import { NavLink } from "react-router-dom";
import logo_img from "/src/assets/imgs/logo.png";

const Logo = function logo() {
  return (
    <div className="flex h-full w-fit flex-none items-center justify-center">
      <NavLink to="/" className="logo">
        <div className="grid h-[70px] w-[313px] place-content-center drop-shadow-lg">
          <img src={logo_img} alt="logo" />
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
