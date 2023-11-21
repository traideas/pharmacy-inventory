import React from 'react';
import PatientProfile from '../../../components/patient/profile/PatientProfile';
import MedicineSchedule from '../../../components/patient/medicineSchedule/MedicineSchedule';

const PatientHomePage = () => {
  
  return (
    <div className='container-2xl'>
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 '>
      <PatientProfile />
      <div className='col-span-3'>
      <div className='border border-gray-300 mx-28 mt-10 px-3 '>
        <MedicineSchedule />
      </div>
      </div>
      </div>
    </div>
  );
};

export default PatientHomePage;
