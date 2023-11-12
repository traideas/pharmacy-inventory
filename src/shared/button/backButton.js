import React from 'react';
import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <button
      onClick={handleClick}
      className="text-white bg-[#050708] hover:bg-[#050708]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mb-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
      Back
    </button>
  );
};

export default BackButton;