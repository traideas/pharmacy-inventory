import React from 'react';

const Pagination = ({
  count,
  page,
  onNext,
  onPrev,
  onJump,
}) => {
  const totalPages = count;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className="px-1">
          <button
            className={`flex items-center justify-center px-4 h-10 leading-tight ${
              i === page
                ? "text-white border-blue-300 bg-gray-600"
                : "text-gray-500 bg-white border border-gray-300"
            } hover:bg-gray-100 hover:text-gray-700`}
            onClick={() => onJump(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav className="border-t border-gray-100 flex justify-end py-4">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover-text-gray-700"
            onClick={onPrev}
            disabled={page === 1}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700"
            onClick={onNext}
            disabled={page === totalPages}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;