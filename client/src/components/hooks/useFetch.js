import { useEffect, useState } from "react";
import GameApi from "../../apis/GameApi";

const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // after the first render, fetch our data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GameApi.get(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { response, error, isLoading };
};

export default useFetch;
