import http from "./http-common";

const useRequest = () => {
  const postRequest = (url, body) => {
    return http.post(url, body);
  };

  const getRequest = (url) => {
    return http.get(url);
  };
  const deleteRequest = (url) => {
    return http.delete(url)
  };

  return [postRequest, getRequest, deleteRequest];
};

export default useRequest;