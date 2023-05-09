import { useState } from "react";
import TagsListProjects from "./TagsListProjects";
import TextCardProjects from "./TextCardProjects";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const CardProject = function cardProject({ project }: { project: Project }) {
  const [img_loaded, setImgLoaded] = useState(false);

  return (
    <div className="flex flex-col w-[16.5rem] h-[20rem] border border-slate-300 shadow-md rounded hover:bg-slate-100 dark:border-slate-500 dark:hover:bg-slate-700 dark:shadow-slate-600">
      <div
        className={
          img_loaded
            ? "flex w-full basis-1/2"
            : "flex w-full basis-1/2 bg-gray-300 animate-pulse"
        }
      >
        <img
          className="rounded-t"
          src={project.image}
          alt="img"
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <div className="flex flex-col basis-1/2 w-full">
        <div className="w-full basis-3/4">
          <TextCardProjects
            title={project.title}
            description={project.description}
            img_loaded={img_loaded}
          />
        </div>
        <div className="w-full basis-1/4">
          <TagsListProjects tags={project.tags} img_loaded={img_loaded} />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
