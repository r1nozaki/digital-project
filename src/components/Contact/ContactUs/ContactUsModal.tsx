import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
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
    <AnimatePresence>
      <div
        className='fixed inset-0 z-10 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
        onClick={() => setIsOpenModal(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          key='modal'
          className='relative w-full h-auto max-w-lg p-10 bg-white rounded-lg shadow-xl'
          onClick={e => e.stopPropagation()}
        >
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactUsModal;
