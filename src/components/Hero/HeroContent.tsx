import HeroImg from '../../assets/HeroPhoto.png';
import Button from '../UI/Button';
const HeroContent = () => {
  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex flex-col'>
        <span className='font-light text-[64px] text-[#BDBDBD]'>Project</span>
        <span className='font-bold text-[64px] -mt-6'>AXIS</span>
      </div>
      <div className='relative'>
        <img src={HeroImg} alt='Project image' />
        <Button
          text={'View project'}
          className='absolute bottom-0 left-0 uppercase transition-colors duration-300 bg-white hover:cursor-pointer hover:border-black hover:bg-black hover:text-white'
          link={'/project'}
        />
      </div>
    </div>
  );
};

export default HeroContent;
