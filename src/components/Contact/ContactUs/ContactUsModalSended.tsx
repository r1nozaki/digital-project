import Button from '@/components/UI/Button';
import { Check } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

interface ContactUsModalSendedProps {
  isOpenModal: boolean;
  isSended: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setIsSended: Dispatch<SetStateAction<boolean>>;
}

const ContactUsModalSended = ({
  isSended,
  isOpenModal,
  setIsOpenModal,
  setIsSended,
}: ContactUsModalSendedProps) => {
  const handleSended = () => {
    setIsOpenModal(!isOpenModal);
    setIsSended(!isSended);
  };

  return (
    <div className='flex flex-col items-center justify-center font-roboto'>
      <div className='w-31.5 h-31.5 bg-transparent border border-[#D1D1D1] p-5.5 rounded-full mt-4'>
        <div className='w-20.5 h-20.5 bg-[#0DC332] flex items-center justify-center rounded-full '>
          <Check color='#FFFFFF' size={50} />
        </div>
      </div>
      <span className='text-xl font-bold mt-6 text-[#333333]'>Thank You!</span>
      <p className='text-sm text-center font-black text-[#4F4F4F] mt-7'>
        Your message has been sent. We will contact you shortly.
      </p>
      <Button
        text={'Go Back'}
        onClick={handleSended}
        className='uppercase bg-[#333333] text-white transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black w-full mt-10'
      />
    </div>
  );
};

export default ContactUsModalSended;
