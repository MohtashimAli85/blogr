import { BASE_URL } from '@/lib/url';
import React from 'react';
export const dynamic = 'force-dynamic';
const NextjsAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/blogs`);
  const data = await response.json();
  console.log({ data });
  return <h1 className='text-xl p-3'>{data?.message}</h1>;
};

export default NextjsAPI;
