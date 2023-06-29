import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/gameQueryStore";

const PlatformSelector = () => {
  const setPlatform = useGameQueryStore((p) => p.setPlatform);
  const platFormName = useGameQueryStore((p) => p.gameQuery.platform?.name);

  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platFormName ?? "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem key={platform.id} onClick={() => setPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;