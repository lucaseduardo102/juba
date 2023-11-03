import {isAxiosError} from 'axios';
import {useState} from 'react';

export function useApiFetchState({
  apiFn,
}) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [status, setStatus] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      setStatus(null);
      const response = await apiFn();
      setData(response.data);
      setStatus(response.status);
    } catch (error) {
      setError(true);
      if (isAxiosError(error)) {
        setStatus(error.response?.status);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    isLoading,
    isError,
    status,
    fetchData,
  };
}
