import { useState } from 'react';
import axios from 'axios';

function usePost() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const post = (url, obj, head) => {
    axios
      .post(url, obj)
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setError(null);
        console.log(res.data);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        setData(null);
      });
  };
  return { post, data, isPending, error };
}

export default usePost;
