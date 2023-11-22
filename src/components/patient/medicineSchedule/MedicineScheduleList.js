import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRequest from '../../../apiServices/useRequest';
import toasterMessage from '../../../shared/toaster/Toaster';
import { useAuth } from '../../../context/authContext/AuthContextProvider';
import showConfirmationDeletePopup from '../../../shared/toaster/showConfirmationDltPopup';
import MedicineSchedule from './MedicineSchedule';

const MedicineScheduleList = () => {
  const { user } = useAuth();
  const [postRequest, , deleteRequest] = useRequest();

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
 

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);

  const currentDate = new Date().toISOString().split('T')[0];

  const fetchPatientTodayMedicineSchedule = async () => {
    let finalData = {
      patientId: user._id,
      medicinetakenDate: currentDate,
    };
    setLoading(true);
    await postRequest(`/api/patient/loginfo`, finalData)
      .then((res) => {
        if (res.data.error) {
          setLoading(false);
          return toasterMessage(`${res.data.message}`, 'warning');
        } else {
          setDataList(res.data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        return toasterMessage(`Server error`, 'error');
      });
  };

  useEffect(() => {
    fetchPatientTodayMedicineSchedule();
  }, []);



  if (loading) return <p>Loading...</p>;
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
      {dataList.length === 0 ? (
        <p>No medicine schedule found</p>
      ) : (
        dataList.map((data, index) => (
          <>
            <div className="mx-3 mt-2 mb-10" key={index}>
              <MedicineSchedule
                data={data}
                showEdit={showEdit}
                key={index}
                setDataList={setDataList}
                setLoading={setLoading}
 
             
   
 
              />
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default MedicineScheduleList;
