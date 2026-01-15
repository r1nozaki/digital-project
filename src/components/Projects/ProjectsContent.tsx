import { projectsData } from '@/data/ProjectsData';
import ProjectCard from './ProjectCard';

const ProjectsContent = () => {
  return (
    <div className='w-full flex flex-col gap-15 mt-15'>
      {projectsData.map(p => (
        <ProjectCard
          key={p.id}
          id={p.id}
          title={p.title}
          preview={p.preview}
          summary={p.summary}
        />
      ))}
    </div>
  );
};

export default ProjectsContent;
