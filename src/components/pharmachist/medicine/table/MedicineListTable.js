import React, { useEffect, useState } from 'react';
import usePagination from '../../../../customHooks/usePagination';
import BackButton from '../../../../shared/button/backButton';
import Table from '../../../../shared/table/Table';
import RowView from './RowView';
import Pagination from '../../../../shared/pagination/Pagination';
import AddMedicineModal from '../addMedicine/AddMedicineModal';
import useRequest from '../../../../apiServices/useRequest';

import { useLocation, Link, useParams } from 'react-router-dom';
import toasterMessage from '../../../../shared/toaster/Toaster';
import PhLogo from '../../../../assests/logo/pharmachist-logo.png'

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
    strength: '',
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
      ...uptData,
      [e.target.name]: value,
    });
  };

  //get data list
  const fetchMedicineList = async () => {
    try {
      setLoading(true);
      await getRequest(`/api/pharmacy/medicine-list/${id}`)
        .then((res) => {
          setDataList(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          return toasterMessage(err, 'error')
        });
    } catch (error) {
      setLoading(false);
      return toasterMessage(error, 'error')
    }
  };

  useEffect(() => {
    fetchMedicineList();
  }, []);

  //get single pharmacy
  const fetchSinglePharmacy = async () => {
    setLoading(true)
    await getRequest(`/api/pharmacy/${id}`)
      .then((res) => {
        setSinglePharmacy(res.data.data);
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        return toasterMessage(err, 'error')
      });
  };

  useEffect(() => {
    fetchSinglePharmacy();
  }, []);

  //for crt
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!medicineData.medicinename) {
      return toasterMessage(`Plz enter medicine name`, 'warning');
    }
    if (!medicineData.genericname) {
      return toasterMessage(`Plz enter medicine generic name`, 'warning');
    }
    if (!medicineData.type) {
      return toasterMessage(`Plz enter medicine type name`, 'warning');
    }
    if (!stockData.issueDate) {
      return toasterMessage(`Plz enter medicine issue date`, 'warning');
    }
    if (!stockData.expireDate) {
      return toasterMessage(`Plz enter medicine expire date`, 'warning');
    }
    if (!stockData.quantity) {
      return toasterMessage(`Plz enter medicine quantity`, 'warning');
    }
    if (!stockData.unitPrice) {
      return toasterMessage(`Plz enter medicine unit price`, 'warning');
    }
    let medicineFinalData = {
      ...medicineData,
      pharmacyId: id,
    };
    try {
      await postRequest(`/api/medicine/create`, medicineFinalData)
        .then((medRes) => {
  
          if (medRes.data.error === true) {
        
            return toasterMessage(`${medRes.data.message}`, 'error');
          } else {
            let stockFinalData = {
              ...stockData,
              medicineId: medRes.data.data._id,
              pharmacyId: id,
            };
            postRequest(`/api/stock/create`, stockFinalData)
              .then((res) => {
                if (res.data.error === true) {
                  return toasterMessage(`${res.data.message}`, 'error');
                } else {
                  let finalData = {
                    ...medRes.data.data,
                    ...res.data.data,
                  };
                  dataList.length > 0
                    ? setDataList((prev) => [...prev, finalData])
                    : setDataList([finalData]);
                  setMedicineData({
                    medicinename: '',
                    genericname: '',
                    type: '',
                    desc: '',
                    strength: '',
                  });
                  setStockData({
                    issueDate: '',
                    expireDate: '',
                    unitPrice: '',
                    quantity: '',
                  });
                  handleClose();
                }
              })
              .catch((err) => {
                return toasterMessage(err, 'error')
              });
          }
        })
        .catch((err) => {
          return toasterMessage(err, 'error')
        });
    } catch (error) {
      return toasterMessage(error, 'error')
    }
  };

  //for update
  //   setDataList((prev) =>
  //   prev.map((item) =>
  //     item._id === updateData._id ? res.data.data : item
  //   )
  // );
  const handleUptSubmit = async (e, uptData) => {
    e.preventDefault();
    let medicineFinalData = {
      medicinename: uptData.medicinename,
      genericname: uptData.genericname,
      type: uptData.type,
      desc: uptData.desc,
      strength: uptData.strength,
      pharmacyId: id,
    };
    try {
      setLoading(true)
      await postRequest(
        `/api/medicine/update/${uptData.medicineId}`,
        medicineFinalData
      )
        .then((medRes) => {
          if (medRes.data.error === true) {
            setLoading(false)
            return toasterMessage(`${medRes.data.message}`, 'error');
          } else {
            let stockFinalData = {
              issueDate: uptData.issueDate,
              expireDate: uptData.expireDate,
              unitPrice: uptData.unitPrice,
              quantity: uptData.quantity,
              medicineId: medRes.data.data._id,
              pharmacyId: id,
            };
            
            postRequest(`/api/stock/update/${uptData._id}`, stockFinalData)
              .then((res) => {
                if (res.data.error === true) {
                  setLoading(false)
                  return toasterMessage(`${res.data.message}`, 'error');
                } else {
                  let finalData = {
                    ...medRes.data.data,
                    ...res.data.data,
                  };
                  setDataList((prev) =>
                    prev.map((item) =>
                      item._id === uptData._id ? uptData : item
                    )
                  );
                  setLoading(false)
                }
              })
              .catch((err) => {
                setLoading(false)
                return toasterMessage(`${err}`, 'error')
              });
          }
        })
        .catch((err) => {
          setLoading(false)
          return toasterMessage(`${err}`, 'error')
        });
    } catch (error) {
      setLoading(false)
      return toasterMessage(`${error}`, 'error')
    }
  };

  const PER_PAGE = 25;
  const count = Math.ceil(dataList.length / PER_PAGE);
  const _DATA = usePagination(dataList, PER_PAGE);

  if (loading) return <p>loading...</p>;


  return (
    <div className="container-2xl">
      {dataList.length === 0 ? (
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
          <div className='flex justify-center'>
            <img src={PhLogo} alt='' className='h-92'/>
          </div>
          <div className='text-center'>
          <h1>
              Pharmacy Name:{' '}
              <span className="text-xl font-bold ml-1">
                { singlePharmacy && singlePharmacy.pharmacyname}
              </span>
            </h1>
          </div>
          <div className="flex justify-end items-center">
           
            <button
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              onClick={handleOpen}
              className="text-gray-900 mt-10 md:mt-0 lg:mt-0 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Medicine
            </button>
          </div>
          {/* <div className="pb-4 bg-white ">
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
          </div> */}
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
                    Medicine Generic Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Medicine Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Medicine Strength
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
