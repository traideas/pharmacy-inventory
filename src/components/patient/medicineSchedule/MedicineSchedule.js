import React, { useState } from 'react';
import toasterMessage from '../../../shared/toaster/Toaster';
import showConfirmationDeletePopup from '../../../shared/toaster/showConfirmationDltPopup';
import useRequest from '../../../apiServices/useRequest';

const MedicineSchedule = ({
  index,
  setDataList,
  setLoading,
  data,
}) => {
  const [postRequest, , deleteRequest] = useRequest();

  const [showEdit, setShowEdit] = useState(false);
  const handleOpenShowEdit = (item) => {
    setUptSchedule(item);
    setShowEdit(true);
  };
  const handleCloseEdit = () => setShowEdit(false);

  const [uptSchedule, setUptSchedule] = useState({
    morning: false,
    midday: false,
    evening: false,
    dinner: false,
  });

  const handleChangeSchedule = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUptSchedule({
      ...uptSchedule,
      [e.target.name]: value,
    });
  };

  const handleSubmitPatientLogSchedule = async (e, uptData) => {
    e.preventDefault();
    if (uptData === null)
      return toasterMessage(`Schedule data not found`, 'warning');
    const finalData = {
      ...uptSchedule,
      patientmedicineId: uptData.patientmedicineId,
    };
    setLoading(true);
    await postRequest(`/api/patient/update/${uptData._id}`, finalData)
      .then((res) => {
        if (res.data.error === true) {
          setLoading(false);
          return toasterMessage(`${res.data.message}`, 'warning');
        } else {
   
          setDataList((prev) =>
            prev.map((item) => (item._id === uptData._id ? finalData : item))
          );
          handleCloseEdit();
          setLoading(false);
          return toasterMessage(`Schedule update successfully`)
        }
      })
      .catch((err) => {
        setLoading(false);
        return toasterMessage(`Server Error`, 'error');
      });
  };
 
  

  const handleDeleteSchedule = async (data) => {
    if (!data._id) return toasterMessage('Data not found', 'warning');
    showConfirmationDeletePopup(() => {
      const deleteMedicineSchedule = async () => {
        try {
          deleteRequest(`/api/patient/delete/${data._id}`)
            .then((res) => {
              if (res.data.error === true) {
                return toasterMessage(`${res.data.message}`, 'error');
              } else {
                setDataList((prev) => prev?.filter((i) => i?._id !== data._id));
                return toasterMessage('Data delete successfully');
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error, 'from try catch');
        }
      };

      deleteMedicineSchedule();
    });
  };

  return (
  
      <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex justify-start gap-x-5 items-center">
        
          {!showEdit ? (
            <>
              <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">
            {data.patientmedicineName}
          </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => handleOpenShowEdit(data)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                  onClick={() => handleDeleteSchedule(data)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </>
          ): (
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">
            {data.patientmedicineName}
          </h5>
          )}
        </div>
        {!showEdit ? (
          <>
          <div className="font-normal text-gray-700 ">
            <div className="flex justify-start gap-x-5 items-center ml-2 mt-1">
              <p>
                Morning:-{' '}
                {data.morning === true ? (
                  <span className="text-green-600 font-semibold"> Taken</span>
                ) : (
                  <span className="text-red-600 font-semibold"> Not Taken</span>
                )}
              </p>
              <p>
                Lunch:-{' '}
                {data.midday === true ? (
                  <span className="text-green-600 font-semibold"> Taken</span>
                ) : (
                  <span className="text-red-600 font-semibold"> Not Taken</span>
                )}
              </p>
              <p>
                Evening:-{' '}
                {data.evening === true ? (
                  <span className="text-green-600 font-semibold"> Taken</span>
                ) : (
                  <span className="text-red-600 font-semibold"> Not Taken</span>
                )}
              </p>
              <p>
                Night:-{' '}
                {data.dinner === true ? (
                  <span className="text-green-600 font-semibold"> Taken</span>
                ) : (
                  <span className="text-red-600 font-semibold"> Not Taken</span>
                )}
              </p>
            </div>
            <div className="flex justify-between items-center"></div>
          </div></>
        ) : (
          <div>
            <form onSubmit={(e) => handleSubmitPatientLogSchedule(e, data)}>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border-none  rounded-lg sm:flex  ">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center ps-3">
                    <input
                      type="checkbox"
                      name="morning"
                      checked={uptSchedule.morning}
                      onChange={handleChangeSchedule}
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
                      checked={uptSchedule.midday}
                      onChange={handleChangeSchedule}
                      name="midday"
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
                      checked={uptSchedule.evening}
                      onChange={handleChangeSchedule}
                      name="evening"
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
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center ps-3">
                    <input
                      type="checkbox"
                      checked={uptSchedule.dinner}
                      onChange={handleChangeSchedule}
                      name="dinner"
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
              <div className="flex justify-end gap-x-5 items-center mt-5">
                <div>
                  <button
                    onClick={handleCloseEdit}
                    className="focus:outline-none text-white bg-red-700  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2"
                  >
                    Cencel
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
 
  );
};

export default MedicineSchedule;


