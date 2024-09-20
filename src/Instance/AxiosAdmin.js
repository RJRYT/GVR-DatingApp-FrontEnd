import axios from "axios";

const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/admin`, // Your API base URL
  withCredentials: true,
});

export default apiInstance;
