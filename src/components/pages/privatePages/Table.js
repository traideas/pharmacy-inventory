import React from "react";

const Table = () => {
  return (
    <div className="mt-4 border border-gray-200 rounded-lg shadow">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200  ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Unit Price
              </th>
              <th scope="col" class="px-6 py-3">
                Issue Date
              </th>

              <th scope="col" class="px-6 py-3">
                Expire Date
              </th>


              <th scope="col" class="px-6 py-3">
                Type
              </th>

              <th scope="col" class="px-6 py-3">
                Status
              </th>






            </tr>
          </thead>




          <tbody>
            <tr class="bg-white border-b  ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Good
              </th>
             
              <td class="px-6 py-4">Napa</td>
              <td class="px-6 py-4">100pcs</td>
              <td class="px-6 py-4">$29</td>
              <td class="px-6 py-4">22/8/2023</td>
              <td class="px-6 py-4 ">22/10/2023
              <span class="block mt-1">9 days to go</span>
              </td>
              <td class="px-6 py-4">homeopathic</td>
              <td class="px-6 py-4">done</td>
              
            </tr>
           
       
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
