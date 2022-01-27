import React from 'react';
import axios from 'axios';
function useGet(url) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return { data };
}

export default useGet;
