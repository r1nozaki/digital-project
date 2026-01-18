import { lenis } from '@/lenisInstance';
import { useEffect, useState } from 'react';

interface UsePaginationReturn<T> {
  next: () => void;
  prev: () => void;
  currentData: T[];
  currentPage: number;
  maxPage: number;
}

const usePagination = <T>(
  data: T[],
  itemsPerPage: number,
): UsePaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage) || 1;

  const currentData = (): T[] => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  const next = () => {
    setCurrentPage(curr => Math.min(curr + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage(curr => Math.max(curr - 1, 1));
  };

  useEffect(() => {
    lenis.scrollTo(140);
  }, [currentPage]);

  return {
    next,
    prev,
    currentData: currentData(),
    currentPage,
    maxPage,
  };
};

export default usePagination;
