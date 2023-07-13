import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export function Menu () {
    return (
        
        <Flex  mb="15px" bg="#fff"  justifyContent="center" borderRadius="10px"       boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
        >

        
        <UnorderedList w="400px" h="50px" display="flex" listStyleType="none" p="2px" m="5px" justifyContent="space-around" alignItems="center" fontSize="22px">
          <ListItem  >
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem >
            <Link to="/tasks">Tasks</Link>
          </ListItem>
          <ListItem >
            <Link to="/about-us">About Us</Link>
          </ListItem>
        </UnorderedList>

      </Flex>
        
    );
}