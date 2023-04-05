const ProjectPrototype = function projectPrototype({
  project,
}: {
  project: string;
}) {
  return (
    <div className="flex place-self-center">
      <h1>{project}</h1>
    </div>
  );
};

export default ProjectPrototype;
