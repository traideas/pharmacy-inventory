import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toasterMessage from '../../shared/toaster/Toaster';
import { useAuth } from '../../context/authContext/AuthContextProvider';

const LoginForm = ({ toggleSignUp }) => {
  let navigate = useNavigate();
  const { loginUser, isLoading, isError} = useAuth();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  //console.log(data);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (data.username === 'pharma.com' && data.password === '123456') {
  //     navigate('/pharma/home');
  //   } else if (data.email === 'patient.com' && data.password === '123456') {
  //     navigate('/patient/home');
  //   } else {
  //     toasterMessage('Wrong credential', 'warning');
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.username) {
      return toasterMessage('Plz enter valid email address', 'warning');
    }
    if (!data.password) {
      return toasterMessage('Plz enter password', 'warning');
    }
    //console.log(data, 'input data')
    loginUser(
      data.username,
      data.password,
      navigate
    );
    // if (isError === true) {
    //   return toasterMessage('Somthing went wrong', 'error');
    // } else {
    //   return toasterMessage('Login Success');
    // }
  };

  return (
    <div>
    <h1 className="text-xl font-bold sm:text-3xl text-center ">
      Login to your account
    </h1>
    <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <div className="relative">
          <input
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter username"
            onChange={(e) =>
              setData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
      </div>

      <div>
        {/* <div className="text-left text-sm font-semibold">
       <label htmlFor="password" className="text-left">
         Password
       </label>
     </div> */}

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

      <div className="mx-auto">
        <button
          onClick={handleSubmit}
          className="inline-block w-full rounded-lg bg-black py-2 text-sm font-mono text-white"
        >
          Sign in
        </button>
      </div>
    </form>
    <div className="mt-3">
      <p>
        Dont have account?{' '}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={toggleSignUp}
        >
          Sign Up
        </span>
      </p>
    </div>
  </div>
  );
};

export default LoginForm;
