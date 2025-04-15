import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { API_HOST } from './globals';
import type Endpoints from './endpoints';
import type { ApiPostParamsType, ApiGetParamsType } from 'src/@types/axios-types';

export const axiosInstance = axios.create({
  baseURL: `${API_HOST}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const api = {
  post<Response, Request = never, Params = never>(
    endpoint: Endpoints,
    data?: Request,
    config?: ApiPostParamsType<Request, Params>,
  ): Promise<AxiosResponse<Response, Request>> {
    return axiosInstance.post<Response, AxiosResponse<Response>, Request>(endpoint, data, config);
  },
  patch<Response, Request = never, Params = never>(
    endpoint: Endpoints,
    data?: Request,
    config?: ApiPostParamsType<Request, Params>,
  ): Promise<AxiosResponse<Response, Request>> {
    return axiosInstance.patch<Response, AxiosResponse<Response>, Request>(endpoint, data, config);
  },
  put<Response, Request = never, Params = never>(
    endpoint: Endpoints,
    data?: Request,
    config?: ApiPostParamsType<Request, Params>,
  ): Promise<AxiosResponse<Response, Request>> {
    return axiosInstance.put<Response, AxiosResponse<Response>, Request>(endpoint, data, config);
  },
  get<Response, Params = never>(
    endpoint: Endpoints,
    config?: ApiGetParamsType<Params>,
  ): Promise<AxiosResponse<Response, Params>> {
    return axiosInstance.get<Response, AxiosResponse<Response>, Params>(endpoint, config);
  },
  delete<Response, Params = never>(
    endpoint: Endpoints,
    config?: ApiGetParamsType<Params>,
  ): Promise<AxiosResponse<Response, Params>> {
    return axiosInstance.delete<Response, AxiosResponse<Response>, Params>(endpoint, config);
  },
};
