import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Prop {
    onPlatformSelect: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPlatformSelect,selectedPlatform }: Prop) => {

    const { data, error } = usePlatforms();

    if(error) return null;
    return (
        <Menu>
           <MenuButton as={Button} rightIcon={ <BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
           <MenuList>
              {data?.map(platform => <MenuItem key={platform.id} onClick={() => onPlatformSelect(platform)}>{platform.name}</MenuItem> )}
           </MenuList>
        </Menu>
    );
}

export default PlatformSelector;