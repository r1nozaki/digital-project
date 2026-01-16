import { preview3 } from '@/assets/Projects';
import Button from '../UI/Button';

const HeroContent = () => {
  return (
    <div className='flex items-center gap-30 w-full'>
      <div className='flex flex-col w-1/3'>
        <span className='font-light text-[64px] text-[#BDBDBD]'>Project</span>
        <span className='font-bold text-[64px] -mt-6 text-[#333333]'>
          Colosseum
        </span>
      </div>
      <div className='relative w-2/3'>
        <img
          src={preview3}
          alt='Project image'
          className='w-full h-full object-cover'
        />
        <Button
          text={'View project'}
          className='absolute bottom-0 left-0 uppercase transition-colors duration-300 bg-white hover:border-black hover:bg-black hover:text-white'
          link={'/projects/1'}
        />
      </div>
    </div>
  );
};

export default HeroContent;
