import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState("");
  const customFetch = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setData(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    customFetch(url);
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useAxios;
