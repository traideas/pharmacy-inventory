import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useRequest from '../../apiServices/useRequest';
import toasterMessage from '../../shared/toaster/Toaster';
import { useAuth } from '../../context/authContext/AuthContextProvider';

const Pharmacy = ({ backToSignin }) => {
  let navigate = useNavigate();
  const { user } = useAuth();
  const [postRequest] = useRequest();

  const [data, setData] = useState({
    pharmacyname: '',
    address: '',
  });
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.pharmacyname) {
      return toasterMessage('Plz enter pharmacy name', 'warning');
    }
    if (!data.address) {
      return toasterMessage('Plz enter pharmacy address', 'warning');
    }
    let finalData = {
      pharmacyname: data.pharmacyname,
      address: data.address,
      userId: user._id,
    };
    setLoading(true);
    await postRequest(`/api/pharmacy/create`, finalData)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.error === true) {
          setLoading(false);
          setIsError(true);
        } else {
          setLoading(false);
          setIsError(false);
          dataList.length > 0
            ? setDataList((prev) => [...prev, res.data.data])
            : setDataList([res.data.data]);
          navigate('/pharma/home', {state: {pharmacyId: res.data.data._id}});
        }
      })
      .catch((err) => {
        setLoading(false);
        setIsError(false);
        console.log(err);
      });
  };
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
              onChange={(e) =>
                setData((prev) => ({ ...prev, pharmacyname: e.target.value }))
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
                setData((prev) => ({ ...prev, address: e.target.value }))
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
      {/* <div className="mt-3">
        <p>
          Want to go back the sign up section ?
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={backToSignin}
          >
            Go back
          </span>
        </p>
      </div> */}
         <div className="mt-3">
        <p>
          Dont want to create Pharmacy now?
          <Link to={`/pharma/home`}>
          <span
            className="text-blue-500 cursor-pointer ml-2"
          >
            Skip
          </span></Link>
        </p>
      </div>
    </div>
  );
};

export default Pharmacy;
