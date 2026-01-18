import About1 from '../../assets/About1.png';
import About2 from '../../assets/About2.png';
import MainAbout from '../../assets/MainAbout.png';

const AboutContent = () => {
  return (
    <div className='bg-[#FBFBFB] relative w-full flex flex-col md:flex-row md:pl-25 md:pr-17.5 py-4 md:gap-7.5'>
      <div className='relative hidden w-full shrink md:block'>
        <img src={About1} alt='Building photo 1 in about section' />
        <img
          src={About2}
          alt='Building photo 2 in about section'
          className='md:absolute top-74 '
        />
      </div>
      <div className='flex flex-col-reverse md:flex-row md:gap-7.5'>
        <img
          src={MainAbout}
          alt='Main building in about section'
          className='pt-7.5'
        />
        <div className='font-roboto'>
          <h1 className='font-light md:text-[64px] text-3xl text-center md:text-left text-[#BDBDBD]'>
            About
          </h1>
          <p className='w-full mt-2 text-sm md:mt-0 md:text-base'>
            Architecture is not just about buildings; it is about shaping the
            future. Our studio combines cutting-edge technology with timeless
            design principles to create spaces that are both visually striking
            and deeply functional. We believe in the power of precision, light,
            and geometry to transform environments and elevate the human
            experience. From concept to completion, we are dedicated to
            excellence in every detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
