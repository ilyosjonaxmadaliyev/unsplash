import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState("");

  useEffect(() => {
    const customFetch = async () => {
      try {
        setIsLoading(true);
        const request = await axios.get(url);
        setData(request.data.results);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(true);
      }
    };
    customFetch();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useAxios;
