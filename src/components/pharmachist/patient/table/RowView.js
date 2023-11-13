import React from 'react'

const RowView = ({ item, index, _DATA, perPage }) => {
    
  return (
    <tr className="hover:bg-gray-100 text-center ">
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    {_DATA.currentPage * perPage + index + 1 - perPage}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">
      {item.pName}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {item.address}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
      {item.createDate}
    </td>
    <td className="px-6 py-4 text-center flex justify-center  whitespace-nowrap text-sm font-medium">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    </td>
  </tr>
  )
}

export default RowView