import { Image, HStack } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from '../components/ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack pr="10px">
      <Image src={logo} boxSize="50px" objectFit={"cover"}></Image>
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;