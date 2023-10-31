import {
  Flex,
  Heading,
  UnorderedList,
  useColorMode,
  Box,
  Button,
} from "@chakra-ui/react";
import { ColorModeToggler } from "./ColorModeToggler";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../DataContext/TaskContext";

export const Header = () => {
  const { colorMode } = useColorMode();

  const navigate = useNavigate();

  const { setToken, setRegister, registered, LogOut } = useContext(TaskContext);

  function handleLogOut() {
    LogOut();
    navigate("/");
  }

  return (
    <Flex
      h="100px"
      w="100vw"
      bg={colorMode === "light" ? "#fff" : "#000009"}
      alignItems="center"
      mt="0"
      mb="15px"
      position={"relative"}
    >
      <Flex  w="60%" h="100%" alignItems={"center"} justifyContent={"flex-end"}>
        
           <Heading
          
          mr="20px"
          as="h1"
          fontSize={{base:"29px",lg:"50px"}}
          fontFamily="Fantasy"
          bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          backgroundClip="text"
          fontWeight="bold"
        >
          Task List
        </Heading>
        
       
        <ColorModeToggler />
      </Flex>
      <Flex
     
        h="100%"
        w="40%"
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        px="10px"
        alignItems={"center"}
      >
        <Box display={registered ? "none": {base:"inline-block",lg:"flex"}}>
          <Box
           
            fontWeight="bold"
            p="3px 20px "
            borderRadius="10px"
            mr={{base:"0",lg:"20px"}}
            mb={{base:"10px",lg:"0"}}
            
          >
            <Button onClick={() => navigate("/login")} >Sing Up</Button>
          </Box>

          <Box
           
            fontWeight="bold"
            p="3px 20px "
            borderRadius="10px"
            mr={{base:"0",lg:"60px"}}
            
          >
            <Button onClick={() => navigate("/register")} >Sing Up</Button>
            
          </Box>
        </Box>
        <Box
         
          display={registered ? "inline-block" : "none"}
          fontWeight="bold"
          p={{base:"0",lg:"3px 20px "}}
          borderRadius="10px"
          mr={{lg:"60px"}}
        >
          <Button onClick={handleLogOut}>Long Out</Button>
        </Box>
      </Flex>
    </Flex>
  );
};
