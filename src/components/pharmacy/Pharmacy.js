import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pharmacy = ({ backToSignup }) => {
    let navigate = useNavigate()
  const [data, setData] = useState({
    pharName: '',
    pharmaAddress: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/pharma/home')
  }
  return (
    <div>
      <h1 className="text-xl font-bold sm:text-3xl text-center ">
        Register your pharmacy
      </h1>
      <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter pharamcy name"
              name="pharmaName"
              onChange={(e) =>
                setData((prev) => ({ ...prev, pharName: e.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Pharmacy Address"
              name="pharmaAddress"
              onChange={(e) =>
                setData((prev) => ({ ...prev, pharmaAddress: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="mx-auto">
          <button
            onClick={handleSubmit}
            className="inline-block w-full rounded-lg bg-black py-2 text-sm font-mono text-white"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-3">
        <p>
          Want to go back the sign up section ?
          <span className="text-blue-500 cursor-pointer ml-2" onClick={backToSignup}>
            Go back
          </span>
        </p>
      </div>
    </div>
  );
};

export default Pharmacy;
