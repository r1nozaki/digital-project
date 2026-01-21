import Image from 'next/image'
import Button from '../../UI/Button' // Перевірте шлях
import { projectsData } from '@/src/data/ProjectsData'

// Тепер інтерфейс простий - просто рядок
interface ProjectsDetailContentProps {
	id: string
}

const ProjectsDetailContent = ({ id }: ProjectsDetailContentProps) => {
	// Цей рядок більше НЕ ПОТРІБЕН, бо id прийшов зверху
	// const id = params.id

	const project = projectsData.find(p => p.id === id)

	if (!project) {
		return (
			<div className='flex justify-center items-center font-bold text-[#333333] text-4xl h-[50vh]'>
				Project not found!
			</div>
		)
	}

	const { title, mainImage, additionalImage, description } = project

	return (
		<div className='w-full font-roboto'>
			<h1 className='mb-8 md:mb-15 font-bold text-3xl text-center md:text-left md:text-[64px] leading-16 text-[#333333]'>
				{title}
			</h1>

			{/* Контент */}
			<div className='w-full flex flex-col items-center gap-7.5'>
				<Image
					src={mainImage}
					alt={title}
					className='object-cover w-full h-80 md:h-109'
					priority
				/>
				<div className='flex flex-col-reverse md:flex-row gap-7.5'>
					<div className='w-full md:w-1/3 h-75 md:h-107'>
						<Image
							src={additionalImage}
							alt={title}
							className='object-cover w-full h-full'
						/>
					</div>
					<p className='w-full text-sm font-light leading-6 text-gray-700 md:text-lg md:w-2/3'>
						{description}
					</p>
				</div>
			</div>

			<Button
				text={'Back to projects'}
				link={'/projects'}
				className='uppercase bg-[#333333] mt-7.5 text-white transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black w-full'
			/>
		</div>
	)
}

export default ProjectsDetailContent
