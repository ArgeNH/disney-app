import axios from 'axios';
import type { AxiosInstance } from 'axios';

import { URL } from '@nh/constants/constants';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: URL,
});

export const fetchRequest = async (endpoint: string) => {
  const config = {
    url: endpoint,
  };

  return axiosInstance(config);
};
