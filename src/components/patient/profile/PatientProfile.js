import React, { useState } from 'react';
import { useAuth } from '../../../context/authContext/AuthContextProvider';

const PatientProfile = () => {
  const { user } = useAuth();
 
   return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-8">
      <div className="px-6 py-6">
        <div className="flex justify-start items-center gap-x-5">
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
          <div>
            <h1 className="text-2xl font-semibold">{user.username}</h1>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
