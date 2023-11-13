import React, { useEffect } from 'react'
import PrescribedMedicineAlertMsg from '../../../../shared/toaster/PrescribedMedicineAlert'

const RowView = ({ item, index, _DATA, perPage }) => {
  useEffect(() => {
    PrescribedMedicineAlertMsg(`You have <span style="color: blue;">${item.medicineName}</span> medicine at <span style="color: red;">${item.time}</span>`)
  }, [])
    
  return (
    <tr className="hover:bg-gray-100 text-center ">
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    {_DATA.currentPage * perPage + index + 1 - perPage}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
      {item.patientName}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
      {item.medicineName}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {item.issueDate}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {item.time}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {item.doseges}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {item.cduration}
    </td>
  </tr>
  )
}

export default RowView