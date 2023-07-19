/* This is Generic(for all /adresses games,genres etc), our useGames & useGenres hooks are almost similar (they fetch data,show error) the only difference
is that they have different endpoints, so we create this Generic(genral)hook which can be used for all endpoints to fetch & save data */

import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";

const useData = (endpoint) => {
  // recieving endpoint from useGames.js & useGenre.js as arrgument
  const [data, setData] = useState([]); // data is general variable for all endpoints useGames & useGenre etc
  const [error, setError] = useState("");

  // hook for Skeleton
  const [isLoading, setIsLoading] = useState(false);

  // Fetching data from api using custom apiClient
  useEffect(() => {
    const controller = new AbortController(); // see 4-Backend folder => Cancel fetch request for cleanup functions

    setIsLoading(true);
    apiClient
      .get(endpoint, { signal: controller.signal })
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
  }, []);
  return { data, error, isLoading }; // this whole function just returns an object holding 3 states, we import & destructure it in GameGrid/otherFiles
};

export default useData;
