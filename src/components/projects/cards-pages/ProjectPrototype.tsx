import { FC, ReactElement } from 'react';

type ProjectPrototypeProps = {
  project: string;
};

const ProjectPrototype: FC<ProjectPrototypeProps> = ({
  project,
}: ProjectPrototypeProps): ReactElement => {
  return (
    <div className="flex place-self-center">
      <h1>{project}</h1>
    </div>
  );
};

export default ProjectPrototype;
