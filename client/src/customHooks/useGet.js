import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useGet(url, setIsPending, setError) {
  const [data, setData] = useState(null);

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
        console.log(err);
      });
  }, []);
  return { data };
}

export default useGet;
