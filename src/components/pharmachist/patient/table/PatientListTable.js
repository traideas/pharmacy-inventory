import React from 'react'
import usePagination from '../../../../customHooks/usePagination';
import BackButton from '../../../../shared/button/backButton';
import Table from '../../../../shared/table/Table';
import RowView from './RowView';
import Pagination from '../../../../shared/pagination/Pagination';

const dataList = [
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:2,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:3,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },

    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
    {
        id:1,
        pName:'Ashrafur Rahman',
        address:'Narayangonj',
        createDate:'Dec 3, 2023',
    },
]

const PatientListTable = () => {
    const PER_PAGE = 25;
    const count = Math.ceil(dataList.length / PER_PAGE);
    const _DATA = usePagination(dataList, PER_PAGE);

  return (
    <div className="container-2xl">
       <div className="flex justify-between items-center">
        <BackButton />
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
          className="block p-2 w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 "
          placeholder="Search by patient name"
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
            </th>{' '}
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Create Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
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
  </div>
  )
}

export default PatientListTable