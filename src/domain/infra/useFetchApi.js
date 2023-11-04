import axios from 'axios';
import { useState } from 'react';

export function useFetchApi({
  apiFn,
}) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [status, setStatus] = useState(null);

  async function fetchData(request) {
    try {
      setLoading(true);
      setError(null);
      setStatus(null);
      const response = await apiFn(request);
      setData(response.data);
      setStatus(response.status);
    } catch (error) {
      setError(true);
      if (axios.isAxiosError(error)) {
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
