/* this is endpoint file from fetching data from games endpoint, we made this because we dont want our states file useData.js to know about our endpoint
because that useData file is Generic (prototype) for all kind of fetching, useData.js is parent hook & useGames/useGenre/other hooks are
its child, we make all our endpoints like this and attach them with generic hook*/

import useData from "./useData";

const useGames = () => useData("/games"); // we pass /games endpoint to useData function which is defined in useData.js

export default useGames;

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
