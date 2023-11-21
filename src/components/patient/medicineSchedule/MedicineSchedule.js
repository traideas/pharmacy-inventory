import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRequest from '../../../apiServices/useRequest';
import toasterMessage from '../../../shared/toaster/Toaster';
import { useAuth } from '../../../context/authContext/AuthContextProvider';

const MedicineSchedule = () => {
    const {user} = useAuth()
    const [postRequest] = useRequest()

  const [showEdit, setShowEdit] = useState(false);
  const handleOpenShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);
  const [dataList, setDataList] = useState([])
  const [loading, setLoading] = useState(false)

  const currentDate = new Date().toISOString().split('T')[0];

  const fetchPatientTodayMedicineSchedule = async() => {
    let finalData = {
        patientId: user._id,
        medicinetakenDate:currentDate
    }
    setLoading(true)
    await postRequest(`/api/patient/loginfo`, finalData).then((res) => {
        if(res.data.error){
            setLoading(false)
            return toasterMessage(`${res.data.message}`, 'warning')
        }else{
            
            setDataList(res.data.data)
            setLoading(false)
        }
    }).catch((err) => {
        setLoading(false)
        return toasterMessage(`Server error`, 'error')
    })
  }

  useEffect(() => {
    fetchPatientTodayMedicineSchedule()
  }, [])

  console.log(dataList, 'data list')

  if(loading) return <p>Loading...</p>
  return (
    <div>
      <div className="flex justify-end items-center">
        <Link to="/patient/medicine-list">
          <div
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            className="text-white mt-3 bg-black border-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Medicine List
          </div>
        </Link>
      </div>
      <h1 className="text-xl font-semibold mt-3">Today's Medicine Schedule</h1>
      {dataList.length === 0 ? (<p>No medicine schedule found</p>) : (
         dataList.map((data, index) => (
            <div className="mx-3 mt-2 mb-10" key={index}>
         <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
           <div className="flex justify-start gap-x-5 items-center">
             <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">
               {data.patientmedicineName}
             </h5>
             {showEdit === false ? (
               <div>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth={1.5}
                   stroke="currentColor"
                   className="w-6 h-6"
                   onClick={handleOpenShowEdit}
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                   />
                 </svg>
               </div>
             ) : (
               ''
             )}
           </div>
           {showEdit === false ? (
             <div className="font-normal text-gray-700 ">
               <div className="flex justify-start gap-x-5 items-center ml-2 mt-1">
                 <p>
                   Morning:-{' '}
                   {data.morning === true ? (<span className="text-green-600 font-semibold"> Taken</span>) : (<span className="text-red-600 font-semibold"> Not Taken</span>)}
                 </p>
                 <p>
                   Lunch:-{' '}
                   {data.midday === true ? (<span className="text-green-600 font-semibold"> Taken</span>) : (<span className="text-red-600 font-semibold"> Not Taken</span>)}
                 </p>
                 <p>
                   Evening:-{' '}
                   {data.evening === true ? (<span className="text-green-600 font-semibold"> Taken</span>) : (<span className="text-red-600 font-semibold"> Not Taken</span>)}
                 </p>
                 <p>
                   Night:-{' '}
                   {data.dinner === true ? (<span className="text-green-600 font-semibold"> Taken</span>) : (<span className="text-red-600 font-semibold"> Not Taken</span>)}
                 </p>
               </div>
               <div className="flex justify-between items-center"></div>
             </div>
           ) : (
             <div>
               <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border-none  rounded-lg sm:flex  ">
                 <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                   <div className="flex items-center ps-3">
                     <input
                       type="checkbox"
                       checked={data.morning}
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
                       checked={data.midday}
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
                       checked={data.evening}
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
                       checked={data.dinner}
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
                     class="focus:outline-none text-white bg-red-700  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2"
                   >
                     Cencel
                   </button>
                 </div>
                 <div>
                   <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2">
                     Submit
                   </button>
                 </div>
               </div>
             </div>
           )}
         </div>
       </div>
         ))
      )}
     
    </div>
  );
};

export default MedicineSchedule;
