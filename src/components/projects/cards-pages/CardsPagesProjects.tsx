import { NavLink } from 'react-router-dom';
import { ProjectsController } from '../../../utils/MultiCardsIntetrfaces';
import PaginationController from '../../commom/pagination-controller/PaginationController';
import CardProject from './CardProject';

const CardsPagesProjects = function cardsPagesProjects({
  projects_controller,
}: {
  projects_controller: ProjectsController;
}) {
  return (
    <div className="flex h-fit w-fit lg:h-full lg:w-[72rem] flex-col gap-4 py-6 justify-center items-center">
      <div className="h-full w-fit lg:w-full">
        {projects_controller.getFilteredProjectsLenght() > 0 ? (
          <div className="grid w-fit lg:w-full grid-cols-1 grid-rows-[8] md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-8">
            {projects_controller
              .showingProjects(projects_controller.getCurrentPage() - 1)
              .map((project, index) => {
                const link: string = project.title
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/[^\w\s]/gi, '')
                  .trim()
                  .replaceAll(' ', '-');

                return (
                  <NavLink
                    key={index}
                    to={project.redirect_url === '' ? link : project.redirect_url}
                    target={project.redirect_url === '' ? '_self' : '_blank'}
                  >
                    <CardProject key={index} project={project} />
                  </NavLink>
                );
              })}
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <p className="font-[Lexend] text-2xl text-[#333333ce] dark:text-slate-300">
              Ooops! No Projects Were Founded!
            </p>
          </div>
        )}
      </div>
      <PaginationController projects_controller={projects_controller} />
    </div>
  );
};

export default CardsPagesProjects;
