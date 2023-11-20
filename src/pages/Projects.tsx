import CardsPagesProjects from '@domain/projects/components/cards-pages/CardsPagesProjects';
import { RefObject, useEffect, useRef } from 'react';
import Filters from '../components/filters/Filters';
import useProjectsController from '../domain/projects/hooks/useProjectsController';
import { ProjectType } from '../utils/MultiCardsIntetrfaces';

const Projects = function projects({ projects_data }: { projects_data: ProjectType[] }) {
  const projects_controller = useProjectsController(projects_data);
  const contentRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    projects_controller.setProjects(projects_data);
  }, [projects_data]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [projects_controller.getCurrentPage()]);

  return (
    <div className="flex h-full lg:h-full w-full flex-row overflow-y-scroll" ref={contentRef}>
      <div className="hidden lg:flex h-full basis-1/4 justify-center">
        <Filters multi_card_controller={projects_controller} />
      </div>
      <div className="flex h-fit w-full lg:h-full lg:basis-3/4 items-center justify-center lg:justify-start">
        <CardsPagesProjects projects_controller={projects_controller} />
      </div>
    </div>
  );
};

export default Projects;
