useFetchData.js
import { useState, useEffect } from 'react';
import api from '../utils/api';

function useFetchData(endpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await api.get(endpoint);
        if (result.data && result.data.data) {
          setData(result.data.data);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error(`Failed to fetch from ${endpoint}:`, error);
        setData([]);
      }
    }

    fetchData();
  }, [endpoint]);

  return data;
}

export default useFetchData;
