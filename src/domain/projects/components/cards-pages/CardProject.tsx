import { FC, ReactElement, useState } from 'react';
import { ProjectType } from '../../types/projects';
import TagsListProjects from './TagsListProjects';
import TextCardProjects from './TextCardProjects';

type CardProjectProps = {
  project: ProjectType;
};

const CardProject: FC<CardProjectProps> = ({ project }: CardProjectProps): ReactElement => {
  const [img_loaded, setImgLoaded] = useState(false);

  return (
    <div className="flex h-[20rem] w-[16.5rem] flex-col rounded border border-slate-300 shadow-md hover:bg-slate-100 dark:border-slate-500 dark:shadow-slate-600 dark:hover:bg-slate-700">
      <div
        className={
          img_loaded
            ? 'flex w-full basis-1/2 rounded-t'
            : 'flex w-full basis-1/2 animate-pulse bg-gray-300'
        }
      >
        <img
          className="rounded-t object-cover"
          src={project.img_path}
          alt="img"
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <div className="flex w-full basis-1/2 flex-col">
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
