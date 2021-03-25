import { useEffect, useState } from "react";
import GameApi from "../apis/GameApi";
import { useAuth0 } from "@auth0/auth0-react";

const useAxios = (url, options = {}) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();
  const audience = "https://nteractbackend.com";

  // after the first render, fetch our data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
        });
        const res = await GameApi.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        let response = res.data;
        setResponse(response);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [response, error, isLoading];
};

export default useAxios;
