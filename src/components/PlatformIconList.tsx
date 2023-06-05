import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";

interface Prop {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Prop) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: FaAndroid,
    web: BsGlobe,
  };

  return (
    <>
      <HStack>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color={"gray.500"}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
