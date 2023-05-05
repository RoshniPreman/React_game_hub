import { Platform } from "../hooks/useGames";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { IconType } from "react-icons";

interface Prop {
    platforms: Platform[]
}

const PlatformIconList = ( { platforms }: Prop) => {
    const iconMap: { [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: FaAndroid,
        web: BsGlobe
    }

    return <>
        { platforms.map( platform => <Icon as={iconMap[platform.slug]} color={'gray.500'} />) }
    </>
}

export default PlatformIconList;