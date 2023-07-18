import { Flex, Heading, ListIcon, ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan,faCheck, faPencil } from "@fortawesome/free-solid-svg-icons";


const AboutUs = () => {

    const {colorMode} = useColorMode();

    return(
        <Flex w="1000px"
        h="auto"
        fontFamily="Ubuntu"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bg={colorMode === "light" ? "#fff" : "#332F2E"}
        borderRadius="10px"
        padding="20px"
        boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)">
            <Heading mb="5px">Hello! 🌟</Heading>
            <Text textAlign="justify"> <strong>Experience the ultimate task management</strong> with our <strong>feature-rich Todo List application!</strong>  Seamlessly add, edit, and delete tasks to ensure your list is always up to date. Stay organized and boost your productivity with ease.</Text>
            <br/>
           <UnorderedList listStyleType="none">
            <ListItem textAlign="justify">
                <ListIcon as={FontAwesomeIcon} icon={faCheck} style={{ color: "green" }} size="lg"/> <strong>Task Creation:</strong>  Easily add new tasks to your list with all the necessary details, such as due dates, priorities, and descriptions.</ListItem>
            <ListItem textAlign="justify"> <ListIcon as={FontAwesomeIcon} icon={faPencil} style={{ color: "blue" }} size="lg"/> <strong>Task Editing:</strong>  Modify existing tasks by editing their descriptions, due dates, priorities, or any other relevant information. Adapt your tasks to changing needs effortlessly.</ListItem>
            <ListItem textAlign="justify"> <ListIcon as={FontAwesomeIcon} icon={faTrashCan} style={{ color: "#FA4B3F" }} size="lg"/> <strong> Task Deletion:</strong> Remove completed or unnecessary tasks from your list with just a click. Keep your task list clutter-free and focused on what matters.</ListItem>
           </UnorderedList>
           <br/>
           <Text>Our app leverages cutting-edge technologies, combining the power of <strong>React</strong>  for dynamic user interfaces, <strong>Vite</strong> for lightning-fast development, and <strong>Chakra UI</strong>  for a stylish and elegant design.
          </Text>
           <br/>
           <Text>Streamline your <strong>daily routine, track your progress</strong> , and effortlessly achieve your goals. Start <strong>maximizing your productivity today!</strong>  💪🚀✨</Text> 


        </Flex>
    )
}

export default AboutUs;