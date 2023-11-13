import React from 'react';
import usePagination from '../../../../customHooks/usePagination';
import BackButton from '../../../../shared/button/backButton';
import Table from '../../../../shared/table/Table';
import RowView from './RowView';
import Pagination from '../../../../shared/pagination/Pagination';
import AddMedicineModal from '../../../../shared/modal/AddMedicineModal';

const dataList = [
  {
    issueDate: 'Nov 10, 2023',
    patientName:'Asraf rahman',
    medicineName: 'Calcicare',
    cduration: 10,
    status: true,
  },
];

const PatientMedicineListTable = ({isOpen, handleOpen, handleClose}) => {
  const PER_PAGE = 25;
  const count = Math.ceil(dataList.length / PER_PAGE);
  const _DATA = usePagination(dataList, PER_PAGE);

  return (
    <div className="container-2xl">
      <div className="flex justify-between items-center">
        <BackButton />
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal"  onClick={handleOpen} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Add Prescribed Medicine
        </button>
      </div>
      <div className="pb-4 bg-white ">
        <label for="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            disabled={dataList.length == 0 ? true : false}
            className="block p-2 w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50"
            placeholder="Search by patient/medicine name"
          />
        </div>
      </div>
      <div className="flex flex-col border border-gray-200 mt-2">
        <Table>
          <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3">
                Medicine Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3">
                Course Duration
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {dataList.length > 0
              ? _DATA
                  .currentData()
                  .map((item, index) => (
                    <RowView
                      item={item}
                      index={index}
                      _DATA={_DATA}
                      perPage={PER_PAGE}
                    />
                  ))
              : ''}
          </tbody>
        </Table>
        {dataList.length > 0 && (
          <div className="mr-2">
            <Pagination
              count={count}
              page={_DATA.currentPage}
              onNext={_DATA.next}
              onPrev={_DATA.prev}
              onJump={_DATA.jump}
            />
          </div>
        )}
      </div>
      {isOpen && (
        <AddMedicineModal handleClose={handleClose}/>
      )}
    </div>
  );
};

export default PatientMedicineListTable;
