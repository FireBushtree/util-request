import { AxiosRequestConfig } from 'axios';
import { RequestOptions } from './interface';
import { getToken, getTenantId, getUserId } from 'envcloud-utils-params';
import qs from 'qs';

const tenantId = getTenantId();
const userId = getUserId();
const baseRequestParams = {} as {
  tenantId: string | null;
  userId: string | null;
};

export const patchRequestData = (
  config: AxiosRequestConfig,
  options: RequestOptions,
) => {
  const {
    requestByFormData,
    hasTenantId,
    hasUserId,
    headers: propHeaders,
    useOriginData,
  } = options || {};
  const { method, data, headers, params } = config;

  if (hasTenantId) {
    baseRequestParams.tenantId = tenantId;
  }

  if (hasUserId) {
    baseRequestParams.userId = userId;
  }

  const requestParams: AxiosRequestConfig = {
    ...config,
    headers: {
      ...headers,
      access_token: getToken(),
      ...propHeaders,
    },
  };

  if (method?.toUpperCase() === 'GET') {
    requestParams.params = {
      ...data,
      ...params,
      ...baseRequestParams,
    };
  } else {
    if (!useOriginData) {
      requestParams.data = {
        ...data,
        ...baseRequestParams,
      };
    }

    if (requestByFormData) {
      requestParams.data = qs.stringify(requestParams.data);
    }
  }

  return requestParams;
};
