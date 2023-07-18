import { Button, Flex, Heading, Text, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Home = () => {

  const {colorMode} = useColorMode();

     return(
        <Flex
        w="400px"
        h="430px"
        fontFamily="Ubuntu"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bg={colorMode === "light" ? "#fff" : "#332F2E"}
        borderRadius="10px"
        padding="20px"
        boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)">
            <Heading textAlign="center">🌟 Welcome to our Todo List!</Heading>
            <Text textAlign="justify">We're thrilled that you've chosen our application to help you stay organized and boost your productivity.</Text> 
            <br/>
            <Text>Here you can effortlessly <strong>create, edit, and delete tasks</strong> . Our Todo List is designed to <strong>simplify your daily life</strong> and ensure you don't forget any <strong>important tasks.</strong> </Text> 
            <br/>
            <Text> Whether you're <strong>planning your day, managing projects</strong> , or simply making a <strong>to-do list</strong> , we're here to assist you!</Text>
        
           <Link to="/Tasks">
           <Button bg="#1F70F5">Add new task</Button>
           </Link>

        
        </Flex>
        
     )
}

export default Home;