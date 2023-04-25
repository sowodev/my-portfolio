import HomeBtn from "./btns/HomeBtn";
import ArticlesBtn from "./btns/ArticlesBtn";
import ProjectsBtn from "./btns/ProjectsBtn";
import LoginBtn from "./btns/LoginBtn";
import { ReactElement } from "react";

const NavButtons = function navButtons() {
  const components_array: ReactElement[] = [
    <HomeBtn />,
    <ArticlesBtn />,
    <ProjectsBtn />,
    <LoginBtn />,
  ];

  return (
    <div className="flex h-full w-fit">
      {components_array.map((component, index) => (
        <div
          key={index}
          className="flex flex-none h-full w-[7rem] justify-center items-center text-white"
        >
          {component}
        </div>
      ))}
    </div>
  );
};

export default NavButtons;
