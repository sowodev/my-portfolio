import { NavLink } from "react-router-dom";

const ProjectsBtn: React.FC = function projectsBtn() {
  return (
    <NavLink to="/projects" className="flex relative h-full w-full group">
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
              className={`w-6 h-5 justify-self-center ${
                isActive && "drop-shadow-lg"
              }`}
              src="/src/assets/imgs/projects-icon.svg"
              alt=""
            />
            <span className={`font-[Blinker] ${isActive && "drop-shadow-lg"}`}>
              Projects
            </span>
          </div>
        </>
      )}
    </NavLink>
  );
};

export default ProjectsBtn;
