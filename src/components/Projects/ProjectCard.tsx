import { type ProjectItem } from '@/types/Projects';
import Button from '../UI/Button';

type ProjectCardProps = Pick<
  ProjectItem,
  'id' | 'title' | 'summary' | 'preview'
>;

const ProjectCard = ({ id, preview, title, summary }: ProjectCardProps) => {
  return (
    <div className='w-full bg-[#FBFBFB] flex gap-7.5'>
      <div className='w-167.5 h-109'>
        <img src={preview} alt={title} className='w-full h-full object-cover' />
      </div>
      <div className='w-1/2 py-7.5 flex flex-col gap-16 font-roboto'>
        <h2 className='font-light text-[40px] text-[#BDBDBD]'>{title}</h2>
        <p>{summary}</p>
        <Button
          text={'View more'}
          link='/'
          className='uppercase transition-colors duration-300 bg-white hover:border-black hover:bg-black hover:text-white'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
