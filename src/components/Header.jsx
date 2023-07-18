import {Flex, Heading, useColorMode,} from "@chakra-ui/react";
import { ColorModeToggler } from "./ColorModeToggler";


export const Header = () => {

  const {colorMode} = useColorMode();
   
  return (
    <Flex border="2px" h="100px" mt="25px" w="400px" bg={colorMode === "light" ? "#fff" : "#332F2E"} alignItems="center" justifyContent="center" mb="10px" borderRadius="20px">
    <Heading mr="20px" as="h1" fontSize="50px" fontFamily="Fantasy" bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      backgroundClip="text"
      fontWeight="bold" ml="35px">
      Task List
    </Heading>
    <ColorModeToggler />
  </Flex>
  
      
    
  );
};
