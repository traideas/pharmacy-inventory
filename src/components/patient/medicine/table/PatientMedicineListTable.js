import React, { useEffect } from 'react';
import usePagination from '../../../../customHooks/usePagination';
import BackButton from '../../../../shared/button/backButton';
import Table from '../../../../shared/table/Table';
import RowView from './RowView';
import Pagination from '../../../../shared/pagination/Pagination';
import AddPatientPrescriptionModal from '../../../../shared/modal/AddPatientPrescriptionModal';

const dataList = [
  {
    issueDate: 'Nov 10, 2023',
    time: 'Night',
    doseges: 1,
    patientName: 'Asraf rahman',
    medicineName: 'Calcicare',
    cduration: 10,
    status: true,
  },
];

const PatientMedicineListTable = ({ isOpen, handleOpen, handleClose }) => {
  const PER_PAGE = 25;
  const count = Math.ceil(dataList.length / PER_PAGE);
  const _DATA = usePagination(dataList, PER_PAGE);

  return (
    <div className="container-2xl">
      <div className="flex justify-between items-center">
        <BackButton />
        <button
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          onClick={handleOpen}
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add Prescribed Medicine
        </button>
      </div>
      <div className="pb-4 bg-white ">
        {dataList.length === 0 ? (
          <p>No prescribed medicine alert</p>
        ) : (
          <div className="block max-w-sm mt-5 mb-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {dataList.length} Prescribed Alert
            </h5>
            <p className="font-normal text-gray-700">
              You have <span className='text-blue-500 font-semibold'>{dataList[0].medicineName}</span> medicine at <span className='text-red-600 font-semibold'>{dataList[0].time}</span>
            </p>
          </div>
        )}
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
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Dosege
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
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
      {isOpen && <AddPatientPrescriptionModal handleClose={handleClose} />}
    </div>
  );
};

export default PatientMedicineListTable;
