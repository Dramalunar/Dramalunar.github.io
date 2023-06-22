import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Flex,ChakraProvider} from '@chakra-ui/react';


function App() {
  
  return (
    
    <ChakraProvider> 
      <Flex
       minH="100vh" 
       display="flex"
       alignItems="center"
       justifyContent="center"
       flexDirection="column"
       bgGradient="linear(to bottom, rgba(34, 45, 195, 1), rgba(45, 189, 253, 1))" > 
        <Header/>
        <TaskList/>
      </Flex>
      </ChakraProvider>
     
    
  )
}

export default App
