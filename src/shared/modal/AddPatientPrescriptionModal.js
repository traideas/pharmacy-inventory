import React from 'react';

const AddPatientPrescriptionModal = ({ handleClose }) => {
  return (
    <div
      id="defaultModal"
      className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center  flex bg-black bg-opacity-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex justify-between items-start p-4 rounded-t border-b">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Add Prescribed Medicine
            </h3>
            <button
              onClick={handleClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="ex:- napa"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Duration
                  </label>
                  <input
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="ex:- 15 day's"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Dosage
                  </label>
                  <input
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder=""
                    required=""
                  />
                </div>
              </div>
              <div>
                <h3 className="block mb-2 text-sm font-medium text-gray-900 ">Time</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border-none  rounded-lg sm:flex  ">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center ps-3">
                      <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 border-gray-300 rounded"
                      />
                      <label
                        for="vue-checkbox-list"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                      >
                       Morning
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center ps-3">
                      <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 border-gray-300 rounded"
                      />
                      <label
                        for="vue-checkbox-list"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                      >
                       Lunch
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center ps-3">
                      <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 border-gray-300 rounded"
                      />
                      <label
                        for="vue-checkbox-list"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                      >
                       Evening
                      </label>
                    </div>
                  </li>
                  <li className="w-full ">
                  <div className="flex items-center ps-3">
                      <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4  bg-gray-100 border-gray-300 rounded"
                      />
                      <label
                        for="vue-checkbox-list"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                      >
                        Night
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                  <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Additional Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
                    placeholder=""
                  ></textarea>
                </div>

              <div className="flex justify-end items-center mt-4">
                <div>
                  <button
                    onClick={handleClose}
                    className=" mt-2 text-white border bg-red-600 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  >
                    Cencel
                  </button>
                </div>
                <div>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="text-white inline-flex items-center bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatientPrescriptionModal;
