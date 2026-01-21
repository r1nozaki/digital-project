import { HousePlug } from 'lucide-react'

const Loading = () => {
	return (
		<div className='flex items-center justify-center min-h-screen animate-pulse'>
			<HousePlug size={100} />
		</div>
	)
}

export default Loading
