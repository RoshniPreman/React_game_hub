import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from "../store/gameQueryStore";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((g) => g.setSearchText);
  const searchInpt = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        searchInpt.current && setSearchText(searchInpt.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchInpt}
          variant="filled"
          placeholder="Search games..."
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;