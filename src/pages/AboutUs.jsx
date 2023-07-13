import { Flex, Heading, Text } from "@chakra-ui/react"

export const AboutUs = () => {
    return(
        <Flex w="390px"
        mb="-17px"
        fontFamily="Ubuntu"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        background="#fff"
        borderRadius="10px"
        padding="20px"
        boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)">
            <Heading>Hello! 🌟</Heading>
            <Text>🌟 Experience the ultimate task management with our feature-rich Todo List application! Seamlessly add, edit, and delete tasks, ensuring your list is always up to date. Stay organized and boost your productivity with ease.</Text>
            <Text>Our app is powered by cutting-edge technologies, combining the power of React for dynamic user interfaces, Vite for lightning-fast development, and Chakra UI for a stylish and elegant design.</Text>
            <Text>Streamline your daily routine, track your progress, and achieve your goals effortlessly. Start maximizing your productivity today! 💪🚀✨</Text>



        </Flex>
    )
}