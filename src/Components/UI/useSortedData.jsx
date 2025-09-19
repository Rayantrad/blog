import { useState, useEffect } from 'react';

function useSortedData(initialData) {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (Array.isArray(initialData)) {
      setSortedData(initialData);
    }
  }, [initialData]);

  return [sortedData, setSortedData];
}

export default useSortedData;