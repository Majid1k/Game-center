import useGenres from "../hooks/useGenres";

const GenreList = () => {
  /* we had all our hooks & effect here but to make them custom/reuseable we moved them in hooks folder inside a function, 
This file shows list of genre so we destructure useGenre() endpoint here, object holds data(from useGenre endpoint) */

  const { data } = useGenres();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
