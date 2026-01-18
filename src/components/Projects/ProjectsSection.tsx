import ProjectsContent from './ProjectsContent';
const ProjectsSection = () => {
  return (
    <section className='pt-8 md:pt-15 pb-28'>
      <h1 className='font-roboto font-bold text-3xl text-center md:text-left md:text-[64px] text=[#333333] leading-16 w-full md:w-69.5'>
        <span className='text-[#BDBDBD] font-light'>Our</span> Projects
      </h1>
      <ProjectsContent />
    </section>
  );
};

export default ProjectsSection;
