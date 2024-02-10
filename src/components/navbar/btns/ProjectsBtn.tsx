import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const ProjectsBtn: FC = function projectsBtn(): ReactElement {
  return (
    <NavLink to="/projects" className="group relative flex h-full w-full">
      {({ isActive }): ReactElement => (
        <>
          <img
            className={`relative h-full w-full ${!isActive && 'opacity-0 group-hover:opacity-30'}`}
            src="/imgs/light.svg"
            alt=""
          />
          <div
            className={`absolute float-none grid h-full w-full place-content-center ${
              isActive && 'drop-shadow-lg'
            }`}
          >
            <RocketLaunchIcon
              className={`h-6 w-6 justify-self-center ${isActive && 'drop-shadow'}`}
            />
            <span className={`text-sm ${isActive && 'drop-shadow-lg'}`}>Projects</span>
          </div>
        </>
      )}
    </NavLink>
  );
};

export default ProjectsBtn;
