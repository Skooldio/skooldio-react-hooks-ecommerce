import { useState, useEffect } from 'react';

const BASE_URL = 'https://us-central1-skooldio-react-hooks.cloudfunctions.net';

export const useAPI = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL + path)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return { data, loading };
};

export default useAPI;
