import React, { useEffect, useState } from 'react';
import usePagination from '../../../../customHooks/usePagination';
import BackButton from '../../../../shared/button/backButton';
import Table from '../../../../shared/table/Table';
import RowView from './RowView';
import Pagination from '../../../../shared/pagination/Pagination';
import AddMedicineModal from '../addMedicine/AddMedicineModal';
import useRequest from '../../../../apiServices/useRequest';

import { useLocation, Link, useParams } from 'react-router-dom';

const DataList = [
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: false,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: false,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: false,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: false,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: false,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
  {
    issueDate: 'Oct 3, 2023',
    medicineType: 'Vitamin',
    exDate: 'Dec 3, 2023',
    medicineName: 'Calcicare',
    medicineQty: 200,
    unitPrice: 100,
    status: true,
  },
];

//const dataList = [];

const MedicineListTable = () => {
  let { id } = useParams();
  const [postRequest, getRequest] = useRequest();
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [singlePharmacy, setSinglePharmacy] = useState({});

  //crt state
  const [medicineData, setMedicineData] = useState({
    medicinename: '',
    genericname: '',
    type: '',
    desc: '',
  });

  const [stockData, setStockData] = useState({
    issueDate: '',
    expireDate: '',
    unitPrice: '',
    quantity: '',
  });

  //upt state
  const [uptData, setUptData] = useState(null);

  //modal for add medicine
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  //crt handle change function
  const handleChangeMedicine = (e) => {
    const value = e.target.value;
    setMedicineData({
      ...medicineData,
      [e.target.name]: value,
    });
  };

  const handleChangeStock = (e) => {
    const value = e.target.value;
    setStockData({
      ...stockData,
      [e.target.name]: value,
    });
  };

  //update hancle chang function
  const handleUptChange = (e) => {
    const value = e.target.value;
    setUptData({
      ...medicineData,
      [e.target.name]: value,
    });
  };

  //get data list
  const fetchMedicineList = async () => {
    try {
      setLoading(true);
      await getRequest(`/api/medicine`)
        .then((res) => {
          console.log(res.data.data);
          // setDataList(res.data.data)
          setLoading(false);
        })
        .catch((err) => {
          console.log(err, 'from api call');
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error, 'from try catch');
    }
  };

  //get single pharmacy
  const fetchSinglePharmacy = async () => {
    await getRequest(`api/pharmacy/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setSinglePharmacy(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSinglePharmacy();
  }, []);

  //for crt
  const handleSubmit = async (e) => {
    e.preventDefault();
    let medicineFinalData = {
      ...medicineData,
      pharmacyId: id,
    };
    try {
      await postRequest(`/api/medicine/create`, medicineFinalData)
        .then((res) => {
          console.log(res.data.data);
          if (res.data.error === true) {
            console.log(res.data.message);
          } else {
            let stockFinalData = {
              ...stockData,
              medicineId: res.data.data.medicineId,
            };
            postRequest(`/api/stock/create`, stockFinalData)
              .then((res) => {
                console.log(res.data.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          // dataList.length > 0 ? ( setDataList((prev) => [...prev, res.data.data])) : (setDataList([res.data.data]))
        })
        .catch((err) => {
          console.log(err, 'from api call');
        });
    } catch (error) {
      console.log(error, 'from try catch');
    }
  };

  //for update
  const handleUptSubmit = async (e) => {
    e.preventDefault();
    try {
      await postRequest()
        .then((res) => {
          console.log(res.data.data);
          //   setDataList((prev) =>
          //   prev.map((item) =>
          //     item._id === updateData._id ? res.data.data : item
          //   )
          // );
        })
        .catch((err) => {
          console.log(err, 'from api call');
        });
    } catch (error) {
      console.log(error, 'from try catch');
    }
  };

  useEffect(() => {
    fetchMedicineList();
  }, []);

  const PER_PAGE = 25;
  const count = Math.ceil(DataList.length / PER_PAGE);
  const _DATA = usePagination(DataList, PER_PAGE);

  return (
    <div className="container-2xl">
      {DataList.length === 0 ? (
        <div className="text-center mt-28">
          <h1>
            No meidicine list exists,{' '}
            <span className="text-xl text-gray-900 text-font-bold">
              Please Add data
            </span>
          </h1>
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            onClick={handleOpen}
            className="text-gray-900 mt-5 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Medicine
          </button>
        </div>
      ) : (
        <>
          <BackButton />
          <div className="flex justify-between items-center">
            <h1>
              Pharmacy Name:{' '}
              <span className="text-xl fond-semibold">
                {singlePharmacy && singlePharmacy.pharmacyname}
              </span>
            </h1>
            <button
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              onClick={handleOpen}
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Medicine
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                disabled={dataList.length === 0 ? true : false}
                className="block p-2 w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50"
                placeholder="Search by medicine name"
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
                    Medicine Name
                  </th>{' '}
                  <th scope="col" className="px-6 py-3">
                    Medicine Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Issue Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Expired Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                {DataList.length > 0
                  ? _DATA
                      .currentData()
                      .map((item, index) => (
                        <RowView
                          item={item}
                          index={index}
                          _DATA={_DATA}
                          setDataList={setDataList}
                          handleUptChange={handleUptChange}
                          uptData={uptData}
                          setUptData={setUptData}
                          handleUptSubmit={handleUptSubmit}
                          perPage={PER_PAGE}
                        />
                      ))
                  : ''}
              </tbody>
            </Table>
            {DataList.length > 0 && (
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
        </>
      )}
      {isOpen && (
        <AddMedicineModal
          handleClose={handleClose}
          medicineData={medicineData}
          stockData={stockData}
          handleChangeMedicine={handleChangeMedicine}
          handleChangeStock={handleChangeStock}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MedicineListTable;
