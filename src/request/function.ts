import { AxiosRequestConfig } from 'axios';
import { RequestOptions } from './interface';
import { getToken, getTenantId, getUserId } from 'envcloud-utils-params'
import qs from 'qs';

const tenantId = getTenantId();
const userId = getUserId();
const baseRequestParams = {
  tenantId,
  userId,
};

export const patchRequestData = (config: AxiosRequestConfig, options: RequestOptions) => {
    const { requestByFormData } = options || {}
    const { method, data, headers, params } = config;

    const requestParams: AxiosRequestConfig = {
      ...config,
      headers: {
        ...headers,
        access_token: getToken(),
      },
    };

    if (method?.toUpperCase() === 'GET') {
      requestParams.params = {
        ...params,
        ...baseRequestParams,
      }
    } else {
      requestParams.data = {
        ...data,
        ...baseRequestParams,
      }

      if (requestByFormData) {
        requestParams.data = qs.stringify(requestParams.data)
      }
    }

    return requestParams;
}
