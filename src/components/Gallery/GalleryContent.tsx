import { MoveLeft, MoveRight } from 'lucide-react';
import { galleryExhibition } from '../../assets/GalleryPhotos';
import { formatNumber } from '../../helpers/formatNumber';
import usePagination from '../../hooks/usePagination';

const GalleryContent = () => {
  const { next, prev, currentData, currentPage, maxPage } = usePagination(
    galleryExhibition,
    10,
  );

  return (
    <div className='w-full'>
      <h1 className='font-roboto text-[64px] font-bold w-69.5 leading-16 text-[#333333]'>
        <span className='font-light text-[#BDBDBD]'>Photo </span>
        Gallery
      </h1>
      <div className='my-7.5 w-full bg-black border-t'></div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7.5'>
        {currentData.map(img => (
          <div key={img} className='w-full h-65'>
            <img
              src={img}
              alt='Gallery'
              className='object-cover w-full h-full transition-transform hover:scale-110'
            />
          </div>
        ))}
      </div>
      <div className='mt-18 flex items-center gap-7.5'>
        <div className='text-2xl font-roboto text-[#333333] flex items-center gap-2'>
          <span className='font-bold'>{formatNumber(currentPage)}</span>
          <span className='text-[#BDBDBD] text-4xl font-light'>/</span>
          <span className='text-[#BDBDBD]'>{formatNumber(maxPage)}</span>
        </div>
        <div className='flex gap-5'>
          <button
            onClick={prev}
            className={`w-13.5 h-13.5 border border-[#F2F2F2] flex items-center justify-center  transition-all duration-300 hover:bg-[#E0E0E0] hover:scale-95  ${
              currentPage === 1
                ? 'bg-[#F9F9F9] cursor-not-allowed'
                : 'cursor-pointer'
            }`}
            disabled={currentPage === 1}
          >
            <MoveLeft color='#333333' />
          </button>
          <button
            onClick={next}
            className={`w-13.5 h-13.5 border border-[#F2F2F2] flex items-center justify-center  transition-all duration-300 hover:bg-[#E0E0E0] hover:scale-95  ${
              currentPage === maxPage
                ? 'bg-[#F9F9F9] cursor-not-allowed'
                : 'cursor-pointer'
            }`}
            disabled={currentPage === maxPage}
          >
            <MoveRight color='#333333' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryContent;
