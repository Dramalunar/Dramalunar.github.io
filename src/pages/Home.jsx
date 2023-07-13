import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Home = () => {
     return(
        <Flex
        w="350px"
        fontFamily="Ubuntu"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        background="#fff"
        borderRadius="10px"
        padding="20px"
        boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)">
            <Heading>🌟 Welcome to our Todo List!</Heading>
            <Text>We're thrilled that you've chosen our application to help you stay organized and boost your productivity. Here you can effortlessly create, edit, and delete tasks. Our Todo List is designed to simplify your daily life and ensure you don't forget any important tasks. Whether you're planning your day, managing projects, or simply making a to-do list, we're here to assist you!</Text>
        
           <Link to="/Tasks">
           <Button bg="#1F70F5">Add new task</Button>
           </Link>

        
        </Flex>
        
     )
}