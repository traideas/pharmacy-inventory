import React, { useEffect, useState } from 'react'
import PrescribedMedicineAlertMsg from '../../../../shared/toaster/PrescribedMedicineAlert'
import useRequest from '../../../../apiServices/useRequest';
import UptMedicineModal from '../uptMedicineModal/UptMedicineModal';
import toasterMessage from '../../../../shared/toaster/Toaster';
import showConfirmationDeletePopup from '../../../../shared/toaster/showConfirmationDltPopup';

const RowView = ({ user, item, index,  setDataList,
  handleUptSubmit,
  uptData,
  setUptData,
  handleUptChange,}) => {
  // useEffect(() => {
  //   PrescribedMedicineAlertMsg(`You have <span style="color: blue;">${item.medicineName}</span> medicine at <span style="color: red;">${item.time}</span>`)
  // }, [])
  const [, getRequest, deleteRequest] = useRequest();
  const [isUptOpen, setIsUptOpen] = useState(false);

  const handleUptOpen = () => {
    console.log(item, 'item in uptn open modal')
    setUptData(item);
    setIsUptOpen(!isUptOpen);
  };

  const handleUptClose = () => setIsUptOpen(false);

  const handleDelete = async (id) => {
    if (!item._id) return toasterMessage('data not found', 'warning');
    showConfirmationDeletePopup(() => {
      const deleteMedicine = async () => {
        try {
          deleteRequest(`/api/prescription/delete/${id}`)
          .then((res) => {
            if(res.data.error === true){
              return toasterMessage(`${res.data.message}`, 'error')
            }else{
              setDataList((prev) => prev?.filter((i) => i?._id !== id));
              return toasterMessage('Data delete successfully')
            }
           
          })
          .catch((err) => {
            console.log(err);
          });
        } catch (error) {
          console.log(error, 'from try catch');
        }
      };

      deleteMedicine();
    });
  };
  return (
   <>
    <tr className="hover:bg-gray-100 text-center ">
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    {index + 1}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
      {user.username}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
      {item.patientmedicineName}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
      {item.morning === true ? (<span>true</span>) : <span className=''>false</span>}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
    {item.midday === true ? (<span>true</span>) : <span className=''>false</span>}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
    {item.evening === true ? (<span>true</span>) : <span className=''>false</span>}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
    {item.dinner === true ? (<span>true</span>) : <span className=''>false</span>}
    </td>

    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {item.startdate}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {item.enddate}
    </td>
    <td className="px-6 py-4 text-center flex justify-center  gap-x-4 text-sm font-medium">
          <button onClick={handleUptOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <div onClick={() => handleDelete(item._id)}>
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
          </div>
        </td>
  </tr>
  {isUptOpen && (
        <UptMedicineModal
          handleUptSubmit={handleUptSubmit}
          handleUptClose={handleUptClose}
          uptData={uptData}
          handleUptChange={handleUptChange}
        />
      )}</>
  )
}

export default RowView