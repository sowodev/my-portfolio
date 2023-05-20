import { HomeIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const HomeBtn: React.FC = function homeBtn() {
  return (
    <NavLink to="/" className="flex relative h-full w-full group">
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
            <HomeIcon
              className={`w-6 h-6 justify-self-center ${
                isActive && "drop-shadow"
              }`}
            />
            <p
              className={`font-[Blinker] leading-4 ${
                isActive && "drop-shadow-lg"
              }`}
            >
              Home
            </p>
          </div>
        </>
      )}
    </NavLink>
  );
};

export default HomeBtn;
