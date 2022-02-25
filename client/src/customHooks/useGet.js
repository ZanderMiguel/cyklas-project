import { useState, useEffect } from 'react';
import axios from 'axios';

function useGet(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        setData(null);
      });
  }, []);
  return { data, isPending, error };
}

export default useGet;
