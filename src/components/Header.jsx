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

  async function handleLogOut() {
    await LogOut();
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
      <Flex w="60%" h="100%" alignItems={"center"} justifyContent={"flex-end"}>
        <Heading
          mr="20px"
          as="h1"
          fontSize="50px"
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
        <Flex display={registered ? "none" : "flex"}>
          <Box
            boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
            fontWeight="bold"
            p="3px 20px "
            borderRadius="10px"
            mr="20px"
          >
            <Link to="/login">Sing In</Link>
          </Box>

          <Box
            boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
            fontWeight="bold"
            p="3px 20px "
            borderRadius="10px"
            mr="60px"
          >
            <Link to="/register">Sing Up</Link>
          </Box>
        </Flex>
        <Box
          boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
          display={registered ? "inline-block" : "none"}
          fontWeight="bold"
          p="3px 20px "
          borderRadius="10px"
          mr="60px"
        >
          <Button onClick={handleLogOut}>Long Out</Button>
        </Box>
      </Flex>
    </Flex>
  );
};
