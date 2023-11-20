import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useRequest from '../../../apiServices/useRequest';
import BackButton from '../../../shared/button/backButton';
import AddPharmacyModal from '../../../components/pharmacy/AddPharmacyModal';
import { useAuth } from '../../../context/authContext/AuthContextProvider';
import toasterMessage from '../../../shared/toaster/Toaster';
import showConfirmationDeletePopup from '../../../shared/toaster/showConfirmationDltPopup';

const PharmachistHomePage = () => {
  const { user } = useAuth();
  const [postRequest, getRequest] = useRequest();
  const [dataList, setDataList] = useState([]);
  const [inputData, setInputData] = useState({
    pharmacyname: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  // const cardData = [
  //   {
  //     id: 1,
  //     routeName: `pharma/medicine-list/${pharmacyId}`,
  //     color: '#C9DAF8',
  //     title: 'Medicine List',
  //   },
  //   {
  //     id: 2,
  //     routeName: `pharma/patient-list/${pharmacyId}`,
  //     color: '#f4cccc',
  //     title: 'Patient List',
  //   },
  // ];

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData({
      ...inputData,
      [e.target.name]: value,
    });
  };

  const fetchAllPhacrmacyData = async () => {
    try {
      await getRequest(`/api/pharmacy`)
        .then((res) => {
          console.log(res.data.data);
          setDataList(res.data.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllPhacrmacyData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputData.pharmacyname) {
      return toasterMessage('Plz enter pharmacy name', 'warning');
    }
    if (!inputData.address) {
      return toasterMessage('Plz enter pharmacy address', 'warning');
    }
    let finalData = {
      ...inputData,
      userId: user._id,
    };
    setLoading(true);
    await postRequest(`/api/pharmacy/create`, finalData)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.error === true) {
          setLoading(false);
          setIsError(true);
        } else {
          setLoading(false);
          setIsError(false);
          dataList.length > 0
            ? setDataList((prev) => [...prev, res.data.data])
            : setDataList([res.data.data]);
          handleClose();
        }
      })
      .catch((err) => {
        setLoading(false);
        setIsError(false);
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    if (!id) return toasterMessage('data not found', 'warning');
    showConfirmationDeletePopup(() => {
      const deleteBranch = async () => {
        try {
          await getRequest(`/api/pharmacy/delete/${id}`).then((res) => {
            setDataList((prev) => prev?.filter((item) => item?._id !== id));
            toasterMessage('Branch deleted success');
          });
        } catch (err) {
          console.error(err);
          toasterMessage('Somthing went wrong', 'error');
        }
      };

      deleteBranch();
    });
  };

  return (
    <div className="container-2xl">
      <div>
        {/* <h1 className='text-center text-2xl font-semibold mt-5 mb-10'>All Pharmacy branches</h1> */}
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
              Create Pharmacy
            </button>
          </div>
        ) : (
          <div>
            {/* <BackButton /> */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Pharmacy List</h1>
              <button
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                onClick={handleOpen}
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Create Pharmacy
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-5 gap-y-3 mb-5  mt-5">
              {/* {cardData.map((item, index) => (
          <Link to={`/${item.routeName}`}>
            <div
              key={index}
              className="max-w-lg py-5 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 shadow-md transform transition-transform hover:scale-105"
              style={{ backgroundColor: item.color }}
            >
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
              </div>
            </div>
          </Link>
        ))} */}
              {dataList.map((data, index) => (
                <Link to={`/pharma/medicine-list/${data._id}`}>
                  <div
                    key={index}
                    className="max-w-lg py-5 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 shadow-md transform transition-transform hover:scale-105"
                  >
                    <div className="p-6">
                      <div className="flex justify-start items-center gap-x-3">
                        <div>
                          <div className="border border-gray-500 bg-gray-100 rounded-full p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-10 h-10"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between gap-x-6">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                              {data.pharmacyname}
                            </h5>
                            {/* <div onClick={() => handleDelete(data._id)} className='mt-1'>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-red-600"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </div> */}
                          </div>
                          <p>{data.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <AddPharmacyModal
          handleClose={handleClose}
          handleChange={handleChange}
          inputData={inputData}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default PharmachistHomePage;
