import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const LoginBtn: React.FC = function loginBtn() {
  return (
    <>
      <NavLink
        to="/login"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Sign in/Sign up"
        data-tooltip-place="bottom"
        className="flex flex-col relative h-full w-full group"
      >
        {({ isActive }) => (
          <>
            <img
              className={`relative h-full w-full ${
                !isActive && "opacity-0 group-hover:opacity-30"
              }`}
              src="/src/assets/imgs/light.svg"
              alt=""
            />
            <div
              className={`grid absolute h-full w-full float-none place-content-center ${
                isActive && "drop-shadow-lg"
              }`}
            >
              <img
                className={`w-10 h-10 justify-self-center ${
                  isActive && "drop-shadow-lg"
                }`}
                src="/src/assets/imgs/user.svg"
                alt=""
              />
            </div>
          </>
        )}
      </NavLink>
      <Tooltip id="my-tooltip" className="font-[Blinker] font-light text-sm" />
    </>
  );
};

export default LoginBtn;
