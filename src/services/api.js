import axios from 'axios';

const generateBaseUrl = () => {
  const {
    REACT_APP_SERVER_PROTOCOL: protocol,
    REACT_APP_SERVER_HOST: host,
    REACT_APP_SERVER_PORT: port,
  } = process.env;

  const url = `${protocol}://${host}:${port}`;
  return url;
};

const api = axios.create({
  baseURL: generateBaseUrl(),
});

export default api;
