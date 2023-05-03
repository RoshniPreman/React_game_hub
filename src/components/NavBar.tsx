import { Image, HStack, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='50px' objectFit={'cover'}></Image>
            <Text color='white'>Navbar</Text>
        </HStack>
    )
}

export default NavBar;