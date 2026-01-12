import { MoveRight } from 'lucide-react';
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project2.png';
import Project3 from '../../assets/Project3.png';
import Project4 from '../../assets/Project4.png';
import Project5 from '../../assets/Project5.png';
import Button from '../UI/Button';

const OurProjectsContetn = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-12 gap-4 relative '>
      <div className='col-span-1 md:col-span-6 relative  h-64 md:h-80'>
        <img
          src={Project1}
          alt='Sample Project'
          className='w-full h-full object-cover'
        />
        <div className='bg-[#333333]  opacity-80 w-full h-full inset-0 absolute cursor-pointer transition-opacity duration-300 hover:opacity-40 '>
          <span className=' text-white font-bold font-roboto text-[64px] absolute top-15 left-20 w-58 leading-16 z-1'>
            Sample Project
          </span>
          <span className='text-white text-lg absolute bottom-20 left-20 flex items-center gap-5 uppercase font-gothicA1 z-1'>
            View More <MoveRight />{' '}
          </span>
        </div>
      </div>

      <div className='col-span-1 md:col-span-6 h-64 md:h-80'>
        <img src={Project2} alt='Dome' className='w-full h-full object-cover' />
      </div>

      <div className='col-span-1 md:col-span-3 h-48 md:h-60'>
        <img
          src={Project3}
          alt='Court'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='col-span-1 md:col-span-5 h-48 md:h-60'>
        <img
          src={Project4}
          alt='Buildings'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='col-span-1 md:col-span-4 h-48 md:h-60'>
        <img
          src={Project5}
          alt='Abstract'
          className='w-full h-full object-cover'
        />
      </div>
      <Button
        text={'All Projects'}
        link={'projects'}
        className='uppercase bg-[#333333] text-white transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black col-span-1 md:col-span-12 justify-self-end'
      />
    </div>
  );
};

export default OurProjectsContetn;
