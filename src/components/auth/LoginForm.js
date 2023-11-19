import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toasterMessage from '../../shared/toaster/Toaster';
import Pharmacy from '../pharmacy/Pharmacy';
import { useAuth } from '../../context/authContext/AuthContextProvider';

const LoginForm = ({ toggleSignUp }) => {
  let navigate = useNavigate();
  const { loginUser, isLoading, isError} = useAuth();
  const [next, setNext] = useState(false);
  const [showPharma, setShowPharma] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  //console.log(data);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (data.email === 'pharma.com' && data.password === '123456') {
  //     navigate('/pharma/home');
  //   } else if (data.email === 'patient.com' && data.password === '123456') {
  //     navigate('/patient/home');
  //   } else {
  //     toasterMessage('Wrong credential', 'warning');
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email) {
      return toasterMessage('Plz enter valid email address', 'warning');
    }
    if (!data.password) {
      return toasterMessage('Plz enter password', 'warning');
    }
    //console.log(data, 'input data')
    loginUser(
      data.email,
      data.password,
      setNext,
      setShowPharma,
      navigate
    );
    if (isError === true) {
      return toasterMessage('Somthing went wrong', 'error');
    } else {
      setNext(true);
      setShowPharma(true);
      return toasterMessage('Login Success');
    }
  };

    const backToSignin = () => {
    setNext(!next);
    setShowPharma(!showPharma);
  };

  return (
    <div>
      {next === false && (
        <div>
          <h1 className="text-xl font-bold sm:text-3xl text-center ">
            Login to your account
          </h1>
          <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <div className="relative">
                <input
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
      )}
      {/* {showPharma === true && (<Pharmacy backToSignup={backToSignup})} */}
      {showPharma === true && <Pharmacy backToSignin={backToSignin}/>}
    </div>
  );
};

export default LoginForm;
