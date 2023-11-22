import React, { useState } from 'react';
import { useAuth } from '../../../context/authContext/AuthContextProvider';

const PatientProfile = () => {
  const { user } = useAuth();

  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-10">
      <div class="flex flex-col items-center pb-10 mt-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-28 h-28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h5 class="mb-1 text-xl font-medium text-gray-900">
          {user.username}
        </h5>
        <span class="text-sm text-gray-500 ">
          {user.email}
        </span>
        <span class="text-sm text-gray-500 ">
          {user.gender}
        </span>
        <span class="text-sm text-gray-500 ">
          {user.age}
        </span>
        <span class="text-sm text-gray-500 ">
          {user.phonenumber}
        </span>
        <span class="text-sm text-gray-500 ">
          {user.address}
        </span>
      </div>
    </div>
  );
};

export default PatientProfile;
