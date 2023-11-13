import React from 'react'

const RowView = ({ item, index, _DATA, perPage }) => {
    
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
      {item.cduration}
    </td>
  </tr>
  )
}

export default RowView