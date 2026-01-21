import Image from 'next/image'
import Contact from '../../../assets/Contact.png'

const ContactHomeContent = () => {
	return (
		<div className='w-full'>
			<Image
				src={Contact}
				alt='Contact person'
				className='object-cover w-full h-full'
			/>
		</div>
	)
}

export default ContactHomeContent
