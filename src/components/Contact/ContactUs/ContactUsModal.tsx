import { X } from 'lucide-react';
import { type Dispatch, type SetStateAction, useState } from 'react';
import ContactForm from '../ContactForm';
import ContactUsModalSended from './ContactUsModalSended';

interface ContactUsModalProps {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ContactUsModal = ({
  isOpenModal,
  setIsOpenModal,
}: ContactUsModalProps) => {
  const [isSended, setIsSended] = useState(false);

  if (!isOpenModal) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'>
      <div className='relative w-full h-auto max-w-lg p-10 bg-white rounded-lg shadow-xl'>
        <button
          onClick={() => setIsOpenModal(false)}
          className='absolute text-gray-400 transition-colors cursor-pointer top-4 right-4 hover:text-black'
        >
          <X size={24} />
        </button>

        {!isSended && (
          <h3 className='mb-6 text-2xl font-bold text-center font-roboto text-[#333333]'>
            Ask a question
          </h3>
        )}

        {isSended ? (
          <ContactUsModalSended
            isOpenModal={isOpenModal}
            isSended={isSended}
            setIsOpenModal={setIsOpenModal}
            setIsSended={setIsSended}
          />
        ) : (
          <ContactForm setIsSended={setIsSended} />
        )}
      </div>
    </div>
  );
};

export default ContactUsModal;
