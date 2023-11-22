import { useState, useEffect } from 'react';
import http from '../../apiServices/http-common';
import useRequest from '../../apiServices/useRequest';
import toasterMessage from '../../shared/toaster/Toaster';

const registerUrl = `/api/user/register`;
const loginUrl = '/api/user/login';
const logoutUrl = '/ath/logout';
const userDetailUrl = '/api/user/info';

const getToken = () => {
  return sessionStorage.getItem('_token');
};

const useAuthDetails = () => {
  const [postRequest, getRequest] = useRequest();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);

  const token = getToken();

  const loginUser = (username, password, navigate) => {
    setIsLoading(true);
    postRequest(loginUrl, {
      username,
      password,
    })
      .then((res) => {
        //  console.log(res.data, 'login api res');
        if (res.data.error === true) {
          setIsLoading(false);
          setIsError(true);
          toasterMessage(res.data.message, 'warning');
        } else {
          setIsLoading(false);
          setIsError(false);
          // console.log(res.data.data, 'login token');
          sessionStorage.setItem('_token', res.data.data);
          http
            .get(userDetailUrl, {
              headers: {
                Authorization: `Bearer ${res.data.data}`,
              },
            })
            .then((res) => {
              // console.log(res.data.data, 'user info');
              if (res.data.error === true) {
                setIsLoading(false);
                setIsError(true);
                return toasterMessage(res.data.message, 'error');
              } else {
                setUser(res.data.data);
                if (res.data.data.usertype === 2) {
                  navigate('/pharma/home');
                  return toasterMessage('Login success as pharmachist');
                } else if (res.data.data.usertype === 1) {
                  navigate(`/patient/home`);
                  return toasterMessage('Login success as patient');
                } else {
                  return toasterMessage(`No user type found`, 'warning');
                }
              }
            })
            .catch((err) => {
              //  console.log(err, 'error from get user data');
            });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        // setAuthError(error.response.data.message);
        setIsError(true);
        //   console.log(error, 'from login user');
      });
  };

  const registerUser = (
    username,
    email,
    password,
    password_confirmation,
    usertype,
    address,
    phonenumber,
    age,
    gender
  ) => {
    setIsLoading(true);
    postRequest(registerUrl, {
      username,
      email,
      password,
      password_confirmation,
      usertype,
      address,
      phonenumber,
      age,
      gender
    })
      .then((res) => {
        if (res.data.error === true) {
          setIsLoading(false);
          setIsError(true);
          toasterMessage(res.data.message, 'warning');
        } else {
          setIsError(false);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    if (token) {
      http
        .get(userDetailUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.error) {
            setIsError(true);
          } else {
            setUser(res.data.data);
            setIsError(false);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          // console.log(error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setUser(null);
    }
  }, []);

  const logout = (navigate) => {
    setUser(null);
    sessionStorage.removeItem('_token');
    navigate('/');
  };
  // console.log(user, 'user')

  return {
    registerUser,
    loginUser,
    isLoading,
    token,
    user,
    logout,
    isError,
  };
};

export default useAuthDetails;
