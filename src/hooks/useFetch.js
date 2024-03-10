import axios from 'axios';
import { useState } from 'react';

export function useFetch(apiFn) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [status, setStatus] = useState(null);

  async function fetch(request) {
    try {
      setIsLoading(true);
      setIsError(null);
      setStatus(null);
      const response = await apiFn(request);
      setData(response.data);
      setStatus(response.status);
    } catch (error) {
      setIsError(true);
      if (axios.isAxiosError(error)) {
        setStatus(error.response?.status);
      }
    } finally {
      setIsLoading(false);
    }
  }
  
  return {
    data,
    isLoading,
    isError,
    status,
    fetch,
    refresh: fetch
  };
}
