import ContactUsContent from './ContactUsContent';
import ContactUsMap from './ContactUsMap';

const ContactUsSection = () => {
  return (
    <section className='flex flex-col items-center gap-20 pt-8 md:pt-16 md:gap-40 md:flex-row'>
      <ContactUsContent />
      <ContactUsMap />
    </section>
  );
};

export default ContactUsSection;
