import axios from 'axios';

const getServerUrl = () => {
  const { REACT_APP_SERVER_URL: url } = process.env;
  return url;
};

const api = axios.create({
  baseURL: getServerUrl(),
});

export default api;
