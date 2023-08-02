import genres from "../data/genres";

// static list of genres
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
