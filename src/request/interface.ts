export interface RequestOptions {
  requestByFormData?: boolean
}

export interface Response<T> {
  data: T;
  exception: string;
  msg: string;
  result: number;
  timestamp?: string;
}
