import { RequestOptions, Response } from './interface';
import axios, { Method, AxiosRequestConfig } from 'axios';
import { patchRequestData } from './function';

const SUCCESS_RESPONSE = 0;

export function request<T>(
  method: Method,
  url: string,
  data?: any,
  options?: RequestOptions,
) {
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
  };

  const requestParams = patchRequestData(config, options || {});

  return new Promise<Response<T>>((resolve, reject) => {
    axios
      .request<Response<T>>(requestParams)
      .then((res) => {
        if (res.data.result === SUCCESS_RESPONSE) {
          resolve(res.data);
        }

        reject(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const get = (url: string, data: any, options?: RequestOptions) =>
  request('GET', url, data, options);
export const post = (url: string, data: any, options?: RequestOptions) =>
  request('POST', url, data, options);
