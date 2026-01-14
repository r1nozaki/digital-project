import ContactUsContent from './ContactUsContent';
import ContactUsMap from './ContactUsMap';

const ContactUsSection = () => {
  return (
    <section className='flex items-center gap-40 pt-16'>
      <ContactUsContent />
      <ContactUsMap />
    </section>
  );
};

export default ContactUsSection;
