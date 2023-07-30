import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = ({ onSelectGenre, selectedGenre }) => {
  /* we had all our hooks & effect here but to make them custom/reuseable we moved them in hooks folder inside a function, 
This file shows list of genre so we destructure useGenre() endpoint here, object holds data(from useGenre endpoint) */

  const { data, isLoading, error } = useGenres();
  // if we get error from api then return nothing in aside GenreList and if isLoading is true then show Chakra-Spinner

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={2} marginTop={4} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="30px"
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  selectedGenre?.id === genre.id ? "extrabold" : "normal"
                }
                variant="link"
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
