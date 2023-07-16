import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const [games, setGames] = useState([]);
  //console.log(games);
  const [error, setError] = useState("");
  console.log(error);

  // Fetching data from api using custom apiClient
  useEffect(() => {
    apiClient
      .get("./games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
