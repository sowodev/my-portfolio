import { Route, Routes } from 'react-router-dom';
import LoadingComponent from '../../../components/loading/LoadingComponent';
import NotFound from '../../../pages/NotFound';
import Projects from '../../../pages/Projects';
import { ProjectType } from '../../../utils/MultiCardsIntetrfaces';
import useGetProjects from '../hooks/api/useGetProjects';
import { ElementsMap } from './ElementsMap';

const ProjectsRoutes = function projectsRoutes() {
  const query = useGetProjects();

  if (query.isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Routes>
      <Route index element={<Projects projects_data={query.data ?? []} />} />
      {query.data &&
        query.data.length > 0 &&
        query.data.map((project: ProjectType, index: number) => {
          const link: string = project.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s]/gi, '')
            .trim()
            .replaceAll(' ', '-');

          return (
            <Route
              key={index}
              path={link}
              element={
                project.title.includes('Filler')
                  ? ElementsMap.get('Filler Project')
                  : ElementsMap.get(project.title)
              }
            />
          );
        })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProjectsRoutes;
