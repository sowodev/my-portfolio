import { useQuery } from '@tanstack/react-query';
import { ProjectType } from '@utils/MultiCardsIntetrfaces';
import axios from 'axios';
import { ProjectsData } from '../ProjectsData';

type ProjectsDTO = {
  title: string;
  description: string;
  img_name: string;
  tags: string;
  redirect_url: string;
  created_at: string;
  updated_at: string;
};

function getProjects() {
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

  return query;
}

export default getProjects;
