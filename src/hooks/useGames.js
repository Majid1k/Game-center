/* this is endpoint file from fetching data from games endpoint, we made this because we dont want our states file useData.js to know about our endpoint
because that useData file is Generic (prototype) for all kind of fetching, useData.js is parent hook & useGames/useGenre/other hooks are
its child, we make all our endpoints like this and attach them with generic hook*/

import useData from "./useData";

const useGames = (gameQuery) =>
  // we pass /games endpoint to useData function which is defined in useData.js
  useData(
    "/games",
    {
      // 05-filter , as 2nd argument we pass Query-String-Perameter, {params} is axios request-config property to filter items
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder, // sending sortOrder selected by user to backend
        search: gameQuery.searchText, // sending searched text by user to backend
      },
      // genres = selectedGenre.id , ? means (optional chaining, selectedGenre can also be null), if selected genre is null then genres will be null
    },
    [gameQuery] // 3rd perameter is for depencecy array of useEffect, changes in gameQuery={genre or platform} will re-render useEffect fetch request
  ); // recieve all these 3 passed values in useGames.js and use there

export default useGames; // 06-filter, all 3 perameters are going to useData.js

/*
 All this code was in GameGrid.jsx, we moved it here inside a function to make it reusable,
 instead of making sepates hook and below given fetching code for each endpoint,we made a Generic hook so we use that for all endpoints
{
  const [games, setGames] = useState([]);
  //console.log(genre); or see responce of http request in network => preview
  const [error, setError] = useState("");
  //console.log(error);

  // hook for Skeleton
  const [isLoading, setIsLoading] = useState(false);

  // Fetching data from api using custom apiClient
  useEffect(() => {
    const controller = new AbortController(); // see 4-Backend folder => Cancel fetch request for cleanup functions

    setIsLoading(true);
    apiClient
      .get("./genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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
*/
