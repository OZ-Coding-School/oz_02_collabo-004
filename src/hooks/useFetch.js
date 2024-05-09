import { useEffect, useState } from "react";
// import axiosInstance from "../utils/axios"

export default function useFetch(url, response, method= "GET", body = null) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const requestOptions = {
        //   method: method,
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // };
        //axiosInstance 호출
        // const response = await axiosInstance(
        //   `${url}`,
        //   requestOptions,
        // )
        if (!response.ok) {
          throw new Error('서버 응답 실패')
        }
        setData(response.data);
      } catch (error) {
        console.error(error);
        console.log(`[GET] - 서버와 통신 과정에서 문제 발생`);
      } finally {
        setIsLoading(false)
      }
    }
    fetchData();
  }, [url, method, body]);

  return { data, isLoading };
}