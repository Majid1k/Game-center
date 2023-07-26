import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = ({ onSelectGenre }) => {
  /* we had all our hooks & effect here but to make them custom/reuseable we moved them in hooks folder inside a function, 
This file shows list of genre so we destructure useGenre() endpoint here, object holds data(from useGenre endpoint) */

  const { data, isLoading, error } = useGenres();

  // if we get error from api then return nothing in aside GenreList and if isLoading is true then show Chakra-Spinner
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
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
