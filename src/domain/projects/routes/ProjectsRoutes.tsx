import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import LoadingComponent from '../../../components/loading/LoadingComponent';
import NotFound from '../../../pages/NotFound';
import Projects from '../../../pages/Projects';
import { ProjectType } from '../../../utils/MultiCardsIntetrfaces';
import { ProjectsData } from '../ProjectsData';
import { ElementsMap } from './ElementsMap';

type ProjectsDTO = {
  title: string;
  description: string;
  img_name: string;
  tags: string;
  redirect_url: string;
  created_at: string;
  updated_at: string;
};

const ProjectsRoutes = function projectsRoutes() {
  const query = useQuery({
    queryKey: ['projects'],
    queryFn: () =>
      axios.get(import.meta.env.VITE_DATABASE_PROJECTS).then((res) => {
        const projects_temp: ProjectType[] = [];

        res.data.forEach((project: ProjectsDTO) => {
          const project_temp: ProjectType = {
            title: project.title,
            description: project.description,
            img_path: project.img_name,
            tags: project.tags.split(','),
            redirect_url: project.redirect_url,
          };

          project_temp.tags.forEach((tag, index) => {
            project_temp.tags[index] = tag.trim();
          });

          projects_temp.push(project_temp);
        });

        const MockedProjectsData: ProjectType[] = [];
        for (let i = 0; i < 77; i++) {
          const project_temp: ProjectType = {
            title: ProjectsData[0].title + ' ' + i,
            description: ProjectsData[0].description + ' ' + i,
            img_path: ProjectsData[0].img_path,
            tags: ProjectsData[0].tags,
            redirect_url: ProjectsData[0].redirect_url,
          };

          MockedProjectsData.push(project_temp);
        }

        return [...projects_temp, ...MockedProjectsData];
      }),
  });

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
