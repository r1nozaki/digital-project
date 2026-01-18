import { preview3 } from '@/assets/Projects';
import Button from '../UI/Button';

const HeroContent = () => {
  return (
    <div className='flex flex-col items-center w-full gap-10 md:flex-row md:gap-30'>
      <div className='flex flex-col w-1/3 text-center md:leading-16 md:text-left'>
        <span className='font-light md:text-[64px] text-[#BDBDBD] text-3xl'>
          Project
        </span>
        <span className='font-bold md:text-[64px]  text-[#333333] text-3xl'>
          Colosseum
        </span>
      </div>
      <div className='relative w-full'>
        <img
          src={preview3}
          alt='Project image'
          className='object-cover w-full h-full'
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
