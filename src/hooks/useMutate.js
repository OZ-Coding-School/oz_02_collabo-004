import { useState } from "react";
import axiosInstance from "../utils/axios";

export default function useMutate(url, method = 'POST') {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // mutate는 주어진 body를 사용하여 POST 요청을 보냄
  const mutate = async (body) => {
    setIsLoading(true);
    try {
      const requestOptions = {
        method: method, 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(body), 
      };
      const response = await axiosInstance(
        `${url}`,
      requestOptions
      );
      if (!response.ok) {
        throw new Error('서버 응답 실패'); 
      }
      setData(response.data);
    } catch (error) {
      console.error(error);
      console.log(`서버와 통신 과정에서 문제 발생, fetch 확인`);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, mutate };
}
