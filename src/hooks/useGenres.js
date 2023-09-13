import genres from "../data/genres";
import APIClient from "../services/api-client";

import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
