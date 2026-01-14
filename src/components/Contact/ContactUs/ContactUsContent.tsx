import Button from '@/components/UI/Button';
import { useState } from 'react';
import ContactUsModal from './ContactUsModal';

const ContactUsContent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className='flex flex-col font-roboto gap-9'>
      <h1 className='leading-16 text-[64px] font-bold w-84.5 text-[#333333]'>
        <span className='font-light text-[#BDBDBD]'>Contact</span> Information
      </h1>
      <div className='flex flex-col'>
        <span className='font-bold text-lg text-[#333333]'>Company Name</span>
        <span className='font-light text-[#333333]'>
          1234 Sample Street Austin Texas 76401
        </span>
      </div>
      <span className='text-[#333333] font-bold text-lg'>512.333.2222</span>
      <span className='text-[#333333] font-light'>sampleemail@gmail.com</span>
      <Button
        text={'Contact Us'}
        className='uppercase bg-[#333333] text-white transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black'
        onClick={handleModal}
      />
      <ContactUsModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </div>
  );
};

export default ContactUsContent;
