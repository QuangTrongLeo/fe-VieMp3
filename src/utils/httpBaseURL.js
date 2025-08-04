import axios from 'axios';

// lấy biến môi trường
const httpBaseURL = process.env.REACT_APP_BASE_URL;

const baseURL = axios.create({
  baseURL: httpBaseURL,
});

export default baseURL;
