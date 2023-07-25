/* this is Custom-Hook for only Genre endpoint, we made this because we dont want our states file useData.js to know about our endpoint
because that useData file is Generic (prototype) for all kind of fetching, useData.js is parent hook & useGames/useGenre/other hooks are
its child, we can make as many endpoint files we want and attach them with Generic parent file useData.js here*/

import useData from "./useData";

const useGenres = () => useData("/genres");

export default useGenres; // This function returns all properties of useData(), {data,isLoading}

/*
{
  const [genres, setGenres] = useState([]);
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
  return { genres, error, isLoading }; // this whole function just returns an object holding 3 states, we import & destructure it in other files
};
*/
