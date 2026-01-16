import Button from '@/components/UI/Button';
import { projectsData } from '@/data/ProjectsData';
import { useParams } from 'react-router';

const ProjectsDetailContent = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className='flex justify-center items-center font-bold text-[#333333]'>
        Project not found!
      </div>
    );
  }

  const { title, mainImage, additionalImage, description } = project;

  return (
    <div className='w-full font-roboto'>
      <h1 className='mb-15 font-bold text-[64px] leading-16 text-[#333333]'>
        {title}
      </h1>
      <div className='w-full flex flex-col items-center gap-7.5'>
        <img
          src={mainImage}
          alt={title}
          className='w-full h-109 object-cover'
        />
        <div className='flex gap-7.5'>
          <div className='w-1/3 h-107'>
            <img
              src={additionalImage}
              alt={title}
              className='w-full h-full object-cover'
            />
          </div>
          <p className='w-2/3 leading-6 font-light text-gray-700'>
            {description}
          </p>
        </div>
      </div>
      <Button
        text={'Back to projects'}
        link={'/projects'}
        className='uppercase bg-[#333333] mt-7.5 text-white transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black w-full'
      />
    </div>
  );
};

export default ProjectsDetailContent;
