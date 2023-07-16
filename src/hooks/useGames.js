// this is Custom-Hook, All this code was in GameGrid.jsx, we moved it here inside a function to make it reusable

import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";

const useGames = () => {
  const [games, setGames] = useState([]);
  //console.log(games);
  const [error, setError] = useState("");
  //console.log(error);

  // Fetching data from api using custom apiClient
  useEffect(() => {
    const controller = new AbortController(); // see 4-Backend folder => Cancel fetch request for cleanup functions

    apiClient
      .get("./games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error }; // this whole function just returns an object holding 2 array, we import & destructure it in other files
};

export default useGames;
