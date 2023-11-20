import React from 'react';
import { useAuth } from '../../../context/authContext/AuthContextProvider';
import { Link } from 'react-router-dom';

const PatientProfile = () => {
  const { user } = useAuth();
  return (
    <section className=" bg-blueGray-50 mt-24">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
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
              </div>
              <div className="w-full px-4 text-center mt-2">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Total Medicines
                    </span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-red-500">
                      1
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Medicine Alert Count
                    </span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Link to="/patient/medicine-list">
                      <div className="text-white bg-black border border-gray-300  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                        Medicine List
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                Username: {user.username}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Email:- {user.email}
              </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {user.address && `Address:- ${user.address}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientProfile;
