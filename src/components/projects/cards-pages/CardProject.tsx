import { Suspense } from "react";
import TagsListProjects from "./TagsListProjects";
import TextCardProjects from "./TextCardProjects";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const CardProject = function cardProject({ project }: { project: Project }) {
  return (
    <div className="flex flex-col w-[16.5rem] h-[20rem] ring-1 ring-[#d8d8d8] shadow-md rounded hover:bg-gray-100">
      <img className="rounded-t" src={project.image} alt="" />
      <div className="flex flex-col basis-1/2 w-full">
        <div className="w-full basis-3/4">
          <TextCardProjects
            title={project.title}
            description={project.description}
          />
        </div>
        <div className="w-full basis-1/4">
          <TagsListProjects tags={project.tags} />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
