import {
  Box,
  Flex,
  ListItem,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../DataContext/TaskContext";

export function Menu() {
  const { colorMode } = useColorMode();

  const { registered } = useContext(TaskContext);

  return (
    <Flex
      bg={colorMode === "light" ? "#fff" : "#000009"}
      w={{base:"100vw",lg:"auto"}}
      justifyContent="center"
      borderRadius="10px"
      boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
      mb="20px"
      flexDirection="column"
      fontFamily="Tahoma"
    >
      <Flex
        w={{base:"auto",lg:"500px"}}
        h="50px"
        p="2px"
        m="5px"
        justifyContent="space-around"
        alignItems="center"
        fontSize={{base:"17px",lg:"22px"}}
      >
        
          <Box
            boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
            fontWeight="bold"
            p="3px"
            borderRadius="10px"
            w="100px"
            textAlign={"center"}
          >
            <Link to="/">Home</Link>
          </Box>
        
        
          <Box
            boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
            fontWeight="bold"
            p="3px 5px "
            borderRadius="10px"
            w="100px"
            textAlign={"center"}
          >
            <Link to={registered ? "/tasks" : "/login"}>Tasks</Link>
          </Box>
        
        
          <Box
            boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
            fontWeight="bold"
            p="3px 5px "
            borderRadius="10px"
            w="100px"
            textAlign={"center"}
          >
            <Link to="/about-us">About Us</Link>
          </Box>
        
      </Flex>
    </Flex>
  );
}
