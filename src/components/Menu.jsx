import { Box,Flex, ListItem, UnorderedList, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export function Menu () {

  const {colorMode} = useColorMode();
    return (
        
      

        <Flex   bg={colorMode === "light" ? "#fff" : "#332F2E"} justifyContent="center" borderRadius="10px" boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
        mb="20px" flexDirection="column" fontFamily="Tahoma"
        >

        <UnorderedList w="500px" h="50px" display="flex" listStyleType="none" p="2px" m="5px" justifyContent="space-around" alignItems="center" fontSize="22px">
          <ListItem  >
            <Box  boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)" bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      backgroundClip="text"
      fontWeight="bold" p="3px 20px " borderRadius="10px">  
              <Link to="/">Home</Link>
            </Box>
          </ListItem>
          <ListItem >
            <Box boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)" bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      backgroundClip="text"
      fontWeight="bold" p="3px 20px " borderRadius="10px">
              <Link to="/tasks">Tasks</Link>
            </Box>
          </ListItem>
          <ListItem >
            <Box  boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)" bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      backgroundClip="text"
      fontWeight="bold" p="3px 20px " borderRadius="10px">
              <Link to="/about-us">About Us</Link>
            </Box>
          </ListItem>
        </UnorderedList>

      
      </Flex>
       
        
    );
}