import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";

const useData = (endpoint, requestConfig, deps) => {
  // data is general variable for all endpoints useGames & useGenre etc
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController(); // cleanup function

      setIsLoading(true);
      apiClient
        .get(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
