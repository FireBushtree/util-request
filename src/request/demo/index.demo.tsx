import React from 'react';
import { request } from 'envcloud-utils-request';

const Demo: React.FC = (props) => {
  const handleRequest = async () => {
    try {
      const res = await request(
        'POST',
        '/cloud/tjdx/prd/web/api/trashComponent/page',
        {
          page: 1,
          rows: 10,
          order: 'asc',
        },
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleFormDataRequest = async () => {
    const res = await request<{
      rows: Array<{username: string}>,
      total: number;
    }>(
      'POST',
      '/cloud/tjdx/prd/web/api/trashComponent/page',
      {
        page: 1,
        rows: 10,
        order: 'asc',
      },
      {
        requestByFormData: true,
      },
    );
    console.log(res.data.rows);
    console.log(res.data.total);
  };

  return (
    <>
      <button onClick={handleRequest}>发请求</button>
      <button onClick={handleFormDataRequest}>发form-data请求</button>
    </>
  );
};

export default Demo;
