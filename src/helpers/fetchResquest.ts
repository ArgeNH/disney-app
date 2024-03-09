import axios from 'axios';

import { URL } from '../constants/constants';

const axiosInstance = axios.create({
  baseURL: URL,
});

export const fetchRequest = async (endpoint: string) => {
  const config = {
    url: endpoint,
  };

  return axiosInstance(config);
};
