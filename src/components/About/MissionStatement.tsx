const MissionStatement = () => {
  return (
    <div className='w-full mt-15 md:mt-30 font-roboto'>
      <h2 className='font-light md:text-[64px] text-3xl text-center md:text-left mb-3 md:mb-0 text-[#BDBDBD]'>
        Main Focus/Mission Statement
      </h2>
      <div className='flex flex-col md:flex-row w-full md:gap-46.5 gap-10'>
        <div className='flex gap-7.5 items-center w-full'>
          <span className='font-black md:text-[200px] text-7xl text-[#BDBDBD]'>
            1
          </span>
          <p className='text-sm md:text-base'>
            We strive to create unique and functional architectural solutions
            that blend seamlessly with the environment. Our goal is to design
            spaces that inspire, endure, and stand the test of time while
            meeting the highest standards of quality.
          </p>
        </div>
        <div className='flex gap-7.5 items-center w-full'>
          <span className='font-black md:text-[200px] text-7xl text-[#BDBDBD]'>
            2
          </span>
          <p className='text-sm md:text-base'>
            We are committed to sustainable building practices and innovative
            design. Every project is approached with a focus on precision,
            artistic vision, and a deep understanding of our clients' needs to
            bring their ideas to reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
