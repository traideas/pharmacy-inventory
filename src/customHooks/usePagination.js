import { useState, useEffect } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1); // Set the current page to 1 on data or items per page change
  }, [data, itemsPerPage]);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    setCurrentPage(Math.max(1, page));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;