import React from 'react';
import Modal from '../../../../shared/modal/Modal';

const AddMedicineModal = ({
  handleClose,
  medicineData,
  stockData,
  handleChangeMedicine,
  handleChangeStock,
  handleSubmit,
}) => {
  return (
    <Modal>
      <div className="flex justify-between items-start p-4 rounded-t border-b">
        <h3 className="text-xl font-semibold text-gray-900 ">Add Medicine</h3>
        <button
          onClick={handleClose}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
          medicineData-modal-toggle="defaultModal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="p-6 space-y-6">
        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Medicine Name
              </label>
              <input
                type="text"
                name="medicinename"
                value={medicineData.medicinename}
                onChange={handleChangeMedicine}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Medicine Generic Name
              </label>
              <input
                name="genericname"
                value={medicineData.genericname}
                onChange={handleChangeMedicine}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Type
              </label>
              <input
                name="type"
                value={medicineData.type}
                onChange={handleChangeMedicine}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Medicine Strength
              </label>
              <input
                name="strength"
                value={medicineData.strength}
                onChange={handleChangeMedicine}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="500mg"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={stockData.quantity}
                onChange={handleChangeStock}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Unit Price
              </label>
              <input
                type="number"
                name="unitPrice"
                value={stockData.unitPrice}
                onChange={handleChangeStock}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required=""
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Issue Date
              </label>
              <input
                type="date"
                name="issueDate"
                value={stockData.issueDate}
                onChange={handleChangeStock}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required=""
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Expired Date
              </label>
              <input
                type="date"
                name="expireDate"
                value={stockData.expireDate}
                onChange={handleChangeStock}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required=""
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Medicine Description
              </label>
              <textarea
                value={medicineData.desc}
                name="desc"
                onChange={handleChangeMedicine}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div>
              <button
                onClick={handleClose}
                className=" mt-2 text-white border bg-red-600 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Cencel
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddMedicineModal;
