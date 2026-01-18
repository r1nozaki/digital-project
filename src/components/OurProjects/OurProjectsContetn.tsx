import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project2.png';
import Project3 from '../../assets/Project3.png';
import Project4 from '../../assets/Project4.png';
import Project5 from '../../assets/Project5.png';
import Button from '../UI/Button';

const OurProjectsContetn = () => {
  const navigate = useNavigate();

  return (
    <div className='relative grid w-full grid-cols-1 gap-4 md:grid-cols-12'>
      <div
        className='relative h-64 col-span-1 md:col-span-6 md:h-80'
        onClick={() => navigate('/projects')}
      >
        <img
          src={Project1}
          alt='Sample Project'
          className='object-cover w-full h-full'
        />
        <div className='bg-[#333333]  opacity-80 w-full h-full inset-0 absolute cursor-pointer transition-opacity duration-300 hover:opacity-40 '>
          <span className=' text-white font-bold font-roboto md:text-[64px] text-3xl absolute top-23 md:top-15 left-20 w-58 leading-16 z-1'>
            Sample Project
          </span>
          <span className='absolute flex items-center gap-3 text-base text-white uppercase md:gap-5 md:text-lg bottom-20 left-20 font-gothicA1 z-1'>
            View More <MoveRight />
          </span>
        </div>
      </div>

      <div className='h-64 col-span-1 md:col-span-6 md:h-80'>
        <img src={Project2} alt='Dome' className='object-cover w-full h-full' />
      </div>

      <div className='h-48 col-span-1 md:col-span-3 md:h-60'>
        <img
          src={Project3}
          alt='Court'
          className='object-cover w-full h-full'
        />
      </div>

      <div className='h-48 col-span-1 md:col-span-5 md:h-60'>
        <img
          src={Project4}
          alt='Buildings'
          className='object-cover w-full h-full'
        />
      </div>

      <div className='h-48 col-span-1 md:col-span-4 md:h-60'>
        <img
          src={Project5}
          alt='Abstract'
          className='object-cover w-full h-full'
        />
      </div>
      <Button
        text={'All Projects'}
        link={'/projects'}
        className='uppercase bg-[#333333] text-white transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black col-span-1 md:col-span-12 justify-self-end'
      />
    </div>
  );
};

export default OurProjectsContetn;
