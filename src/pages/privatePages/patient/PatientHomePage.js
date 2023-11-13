import React, { useState } from 'react';
import PatientMedicineListTable from '../../../components/patient/medicine/table/PatientMedicineListTable';

const PatientHomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  
  return (
    <div>
      <PatientMedicineListTable
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default PatientHomePage;
