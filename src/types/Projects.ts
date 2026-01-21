import type { StaticImageData } from 'next/image'

export interface ProjectItem {
	id: string
	title: string
	preview: StaticImageData
	mainImage: StaticImageData
	additionalImage: StaticImageData
	description: string
	summary: string
}
