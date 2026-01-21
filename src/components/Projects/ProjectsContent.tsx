import { projectsData } from '@/src/data/ProjectsData'
import ProjectCard from './ProjectCard'

const ProjectsContent = () => {
	return (
		<div className='flex flex-col w-full gap-10 mt-5 md:gap-15 md:mt-15'>
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
	)
}

export default ProjectsContent
