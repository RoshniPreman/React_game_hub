import { Image, HStack } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from '../components/ColorModeSwitch'
import SearchInput from './SearchInput'

interface Prop {
    submitSearch:  (searchInpt: string) => void
}


const NavBar = ({ submitSearch }: Prop) => {
    return (
        <HStack pr='10px'>
            <Image src={logo} boxSize='50px' objectFit={'cover'}></Image>
            <SearchInput submitSearchInput={(input) => submitSearch(input)} />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default NavBar;