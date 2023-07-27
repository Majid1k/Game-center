import useData from "./useData";

const usePlatforms = () => useData("/platforms/lists/parents"); //passing endpoint to useData Generic function

export default usePlatforms;
