import ProjectsDetailSection from '@/src/components/Projects/ProjectsDetail/ProjectsDetailSection'
import { projectsData } from '@/src/data/ProjectsData'

export async function generateStaticParams() {
	return projectsData.map(project => ({
		id: project.id
	}))
}

type Props = {
	params: Promise<{ id: string }>
}

export default async function ProjectDetail({ params }: Props) {
	const { id } = await params

	return <ProjectsDetailSection id={id} />
}
