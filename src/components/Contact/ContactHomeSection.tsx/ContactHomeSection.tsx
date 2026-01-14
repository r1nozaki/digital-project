import ContactForm from '../ContactForm';
import ContactHomeContent from './ContactHomeContent';

const ContactHomeSection = () => {
  return (
    <section className='w-full pb-60'>
      <h2 className='font-light font-roboto text-[64px] text-[#BDBDBD]'>
        Contact Us
      </h2>
      <div className='flex gap-7.5 items-center'>
        <div className='w-150'>
          <ContactForm />
        </div>
        <ContactHomeContent />
      </div>
    </section>
  );
};

export default ContactHomeSection;
