import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toasterMessage from '../../shared/toaster/Toaster';
import { useAuth } from '../../context/authContext/AuthContextProvider';

const roleData = [
  {
    usertype: 1,
    title: 'Patient',
  },
  {
    usertype: 2,
    title: 'Pharmacist',
  },
];

const genderData = [
  {
    id: 1,
    title: 'Male',
  },
  {
    id: 2,
    title: 'Female',
  },
  {
    id: 3,
    title: 'Custom',
  },
];

const SignUpForm = ({ toggleSignIn }) => {
  const { registerUser, isLoading, isError, authError } = useAuth();
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    usertype: null,
    address: '',
    phonenumber: '',
    age:'',
    gender:''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.username) {
      return toasterMessage('Plz enter user name', 'warning');
    }
    if (!data.email) {
      return toasterMessage('Plz enter valid email address', 'warning');
    }
    if (!data.password) {
      return toasterMessage('Plz enter password', 'warning');
    }
    if (!data.password_confirmation) {
      return toasterMessage('Plz enter confirm password', 'warning');
    }
    if (!data.usertype) {
      return toasterMessage('Plz select your role', 'warning');
    }
    if (!data.gender) {
      return toasterMessage('Plz select your gender', 'warning');
    }
    //console.log(data, 'input data')
    registerUser(
      data.username,
      data.email,
      data.password,
      data.password_confirmation,
      data.usertype,
      data.address,
      data.phonenumber,
      data.age,
      data.gender
    );
    if (isError === true) {
      return toasterMessage('Somthing went wrong', 'error');
    } else {
      // setNext(true);
      // setShowPharma(true);
      setData({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        usertype: null,
        address: '',
        phonenumber: '',
        age:'',
        gender:''
      })
      return toasterMessage('Registration success, Now Plz Login');
    }
  };

  // const backToSignup = () => {
  //   setNext(!next);
  //   setShowPharma(!showPharma);
  // };

  return (
    <div>
      <h1 className="text-xl font-bold sm:text-3xl text-center ">
        Register your account
      </h1>
      <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter username"
              onChange={(e) =>
                setData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter confirm password"
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  password_confirmation: e.target.value,
                }))
              }
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter your age"
              onChange={(e) =>
                setData((prev) => ({ ...prev, age: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <select
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                gender: e.target.value
              }))
            }
            className="p-4 pe-12 shadow-sm border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          >
              <option>Select gender</option>
            {genderData.map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <select
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                usertype: parseInt(e.target.value),
              }))
            }
            className="p-4 pe-12 shadow-sm border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          >
              <option>Select role</option>
            {roleData.map((item, index) => (
              <option key={index} value={item.usertype}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="relative">
            <input
              type="tel"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter phone number"
              onChange={(e) =>
                setData((prev) => ({ ...prev, phonenumber: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter address"
              onChange={(e) =>
                setData((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          </div>
        </div>
  
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <div className="mx-auto">
            <button
              onClick={handleSubmit}
              className="inline-block w-full rounded-lg bg-black py-2 text-sm font-mono text-white"
            >
              Sign up
            </button>
          </div>
        )}
      </form>
      <div className="mt-3">
        <p>
          Already have account?{' '}
          <span className="text-blue-500 cursor-pointer" onClick={toggleSignIn}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
