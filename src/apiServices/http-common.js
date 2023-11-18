import axios from "axios";

//Production
const baseURL = process.env.REACT_APP_BACKEND_URL;
export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
  //withCredentials: true,
  withCredentials: false
});

//dev
// export default axios.create({
//   headers: {
//     "Content-type": "application/json",
//   },
// });