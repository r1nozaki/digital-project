import { useState } from 'react';

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
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  return {
    next,
    prev,
    currentData: currentData(),
    currentPage,
    maxPage,
  };
};

export default usePagination;
