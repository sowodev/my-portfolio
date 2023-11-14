import { FC, ReactElement } from 'react';
import BlogBtn from './btns/BlogBtn';
import HomeBtn from './btns/HomeBtn';
import ProjectsBtn from './btns/ProjectsBtn';

const NavButtons: FC = (): ReactElement => {
  const components_array: ReactElement[] = [<HomeBtn />, <BlogBtn />, <ProjectsBtn />];

  return (
    <div className="hidden h-full w-fit md:flex">
      {components_array.map(
        (component, index): ReactElement => (
          <div
            key={index}
            className="flex h-full w-[7rem] flex-none items-center justify-center text-white"
          >
            {component}
          </div>
        ),
      )}
    </div>
  );
};

export default NavButtons;
