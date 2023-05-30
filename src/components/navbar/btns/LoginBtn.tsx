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
        className="group relative flex h-full w-full flex-col"
      >
        {({ isActive }) => (
          <>
            <img
              className={`relative h-full w-full ${
                !isActive && "opacity-0 group-hover:opacity-30"
              }`}
              src="/imgs/light.svg"
              alt=""
            />
            <div
              className={`absolute float-none grid h-full w-full place-content-center ${
                isActive && "drop-shadow-lg"
              }`}
            >
              <img
                className={`h-10 w-10 justify-self-center ${
                  isActive && "drop-shadow-lg"
                }`}
                src="/imgs/user.svg"
                alt=""
              />
            </div>
          </>
        )}
      </NavLink>
      <Tooltip
        id="my-tooltip"
        className="absolute z-10 bg-black bg-opacity-100 font-[Blinker] text-sm font-light"
      />
    </>
  );
};

export default LoginBtn;
