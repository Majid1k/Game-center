import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  return (
    <>
      <form
        style={{ width: "100%" }}
        action="Submit"
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(input);
          setInput("");
        }}
      >
        <InputGroup>
          <InputLeftElement>{<BsSearch />}</InputLeftElement>
          <Input
            borderRadius={20}
            variant="filled"
            placeholder="search games..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
