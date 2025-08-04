import axios from 'axios';

const LOCALURL = 'http://localhost:3000/';
const SERVERURL = '';

const baseURL = axios.create({
  baseURL: LOCALURL,
});

export default baseURL;
