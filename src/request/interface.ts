export interface RequestOptions {
  requestByFormData?: boolean
  headers?: any;
  hasUserId?: boolean;
  hasTenantId?: boolean;
  useOriginData?: boolean;
}

export interface Response<T> {
  data: T;
  exception: string;
  msg: string;
  result: number;
  timestamp?: string;
}
