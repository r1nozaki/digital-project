import ContactForm from '../ContactForm'
import ContactHomeContent from './ContactHomeContent'

const ContactHomeSection = () => {
	return (
		<section className='w-full md:pb-60 pb-30'>
			<h2 className='font-light font-roboto text-3xl text-center md:text-left md:text-[64px] mb-3 md:mb-0 text-[#BDBDBD]'>
				Contact Us
			</h2>
			<div className='flex flex-col-reverse md:flex-row gap-7.5 items-center'>
				<div className='w-full md:w-150'>
					<ContactForm />
				</div>
				<ContactHomeContent />
			</div>
		</section>
	)
}

export default ContactHomeSection
