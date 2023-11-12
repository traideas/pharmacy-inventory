import React, { useState } from 'react';
import MedicineListTable from '../../../components/medicine/table/MedicineListTable';

const Medicine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <MedicineListTable
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Medicine;
