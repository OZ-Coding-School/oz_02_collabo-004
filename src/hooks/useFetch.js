import { useEffect, useState } from 'react';
// import axiosInstance from "../utils/axios"

export default function useFetch(url, response) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // const requestOptions = {
      //   method: method,
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // };
      // const response = await axiosInstance(url, requestOptions);
      if (!response.ok) {
        throw new Error('서버 응답 실패');
      }
      // console.log(response)
      // console.log(response.data)
      setData(response.data);
    } catch (error) {
      console.error(error);
      console.log(`[GET] - 서버와 통신 과정에서 문제 발생`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //리패치 함수
  const refetch = () => {
    fetchData();
  };

  return { data, setData, isLoading, refetch };
}
