import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setLoading(false);
      setData(responseData);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {error, loading, data};
}

export default useFetch;
