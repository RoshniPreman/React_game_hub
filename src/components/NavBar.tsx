import { Image, HStack, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from '../components/ColorModeSwitch'


const NavBar = () => {
    return (
        <HStack justifyContent='space-between' pr='10px'>
            <Image src={logo} boxSize='50px' objectFit={'cover'}></Image>
            <Text color='white'>Navbar</Text>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default NavBar;