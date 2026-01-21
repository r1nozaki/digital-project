import ProjectsDetailContent from './ProjectsDetailContent'

const ProjectsDetailSection = ({ id }: { id: string }) => {
	return (
		<section className='pt-8 md:pt-15 pb-30 '>
			<ProjectsDetailContent id={id} />
		</section>
	)
}

export default ProjectsDetailSection
