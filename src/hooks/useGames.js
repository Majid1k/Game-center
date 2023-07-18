// this is Custom-Hook, All this code was in GameGrid.jsx, we moved it here inside a function to make it reusable

import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";

const useGames = () => {
  const [games, setGames] = useState([]);
  //console.log(games); or see responce of http request in network => preview
  const [error, setError] = useState("");
  //console.log(error);

  // hook for Skeleton
  const [isLoading, setIsLoading] = useState(false);

  // Fetching data from api using custom apiClient
  useEffect(() => {
    const controller = new AbortController(); // see 4-Backend folder => Cancel fetch request for cleanup functions

    setIsLoading(true);
    apiClient
      .get("./games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoading }; // this whole function just returns an object holding 3 states, we import & destructure it in other files
};

export default useGames;
