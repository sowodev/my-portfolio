import HomeBtn from "./btns/HomeBtn";
import BlogBtn from "./btns/BlogBtn";
import ProjectsBtn from "./btns/ProjectsBtn";
import LoginBtn from "./btns/LoginBtn";
import { ReactElement } from "react";

const NavButtons = function navButtons() {
  const components_array: ReactElement[] = [
    <HomeBtn />,
    <BlogBtn />,
    <ProjectsBtn />,
    <LoginBtn />,
  ];

  return (
    <div className="flex h-full w-fit">
      {components_array.map((component, index) => (
        <div
          key={index}
          className="flex h-full w-[7rem] flex-none items-center justify-center text-white"
        >
          {component}
        </div>
      ))}
    </div>
  );
};

export default NavButtons;
