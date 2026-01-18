import { type ProjectItem } from '@/types/Projects';
import Button from '../UI/Button';

type ProjectCardProps = Pick<
  ProjectItem,
  'id' | 'title' | 'summary' | 'preview'
>;

const ProjectCard = ({ id, preview, title, summary }: ProjectCardProps) => {
  return (
    <div className='w-full bg-[#FBFBFB] flex flex-col justify-center items-center md:flex-row md:gap-7.5'>
      <div className='w-full h-75 md:w-167.5 md:h-109'>
        <img src={preview} alt={title} className='object-cover w-full h-full' />
      </div>
      <div className='md:w-1/2 w-full py-7.5 flex flex-col justify-center items-center gap-3 md:gap-16 font-roboto px-3'>
        <h2 className='font-light text-3xl text-center w-full md:text-[40px] text-[#BDBDBD]'>
          {title}
        </h2>
        <p className='w-full md:p-0'>{summary}</p>
        <Button
          text={'View more'}
          link={`/projects/${id}`}
          className='w-full uppercase transition-colors duration-300 bg-white hover:border-black hover:bg-black hover:text-white'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
