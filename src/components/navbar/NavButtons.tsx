import { NavLink } from "react-router-dom";

const NavButtons = function navButtons() {
  return (
    <div className="flex h-full w-fit">
      <div className="nav-button-home flex-none">
        <NavLink to="/" className="flex relative h-full w-full">
          {({ isActive }) => (
            <>
              <img
                className={isActive ? "relative h-full w-full" : "invisible"}
                src="/src/assets/imgs/light.svg"
                alt=""
              />
              <div className="grid absolute h-full w-full float-none place-content-center">
                <img
                  className="w-6 h-5 justify-self-center"
                  src="/src/assets/imgs/home-icon.svg"
                  alt=""
                />
                <span className="nav-text">Home</span>
              </div>
            </>
          )}
        </NavLink>
      </div>
      <div className="nav-button-home flex-none">
        <NavLink to="/articles" className="flex relative h-full w-full">
          {({ isActive }) => (
            <>
              <img
                className={isActive ? "relative h-full w-full" : "invisible"}
                src="/src/assets/imgs/light.svg"
                alt=""
              />
              <div className="grid absolute h-full w-full float-none place-content-center">
                <img
                  className="w-6 h-5 justify-self-center"
                  src="/src/assets/imgs/articles-icon.svg"
                  alt=""
                />
                <span className="nav-text">Articles</span>
              </div>
            </>
          )}
        </NavLink>
      </div>
      <div className="nav-button-home flex-none">
        <NavLink to="/projects" className="flex relative h-full w-full">
          {({ isActive }) => (
            <>
              <img
                className={isActive ? "relative h-full w-full" : "invisible"}
                src="/src/assets/imgs/light.svg"
                alt=""
              />
              <div className="grid absolute h-full w-full float-none place-content-center">
                <img
                  className="w-6 h-5 justify-self-center"
                  src="/src/assets/imgs/projects-icon.svg"
                  alt=""
                />
                <span className="nav-text">Projects</span>
              </div>
            </>
          )}
        </NavLink>
      </div>
      <div className="nav-button-foto flex-none">
        <a href="/" className="foto h-3/4 w-3/4">
          <img
            className="h-full w-full"
            src="/src/assets/imgs/user.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default NavButtons;
