import { Menu } from "./components/Menu";
import { Flex, ChakraProvider, extendTheme} from "@chakra-ui/react";
import { TaskProvider } from "./TaskContext";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { AboutUs } from "./pages/AboutUs";
import { Header } from "./components/Header";





const theme = extendTheme({
  fonts: {
    body: "Caprasimo, sans-serif",
    heading: "Ubuntu, serif",
  },
});

export function AppRouter () {
  return (
    <>
    <Header/>
     <Menu />
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tasks" element={<Tasks/> }></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
         </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter> 
    <ChakraProvider theme={theme}>
      <TaskProvider>
        <Flex
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bgGradient="linear(to bottom, rgba(34, 45, 195, 1), rgba(45, 189, 253, 1))"
        >
         
          <AppRouter />

        </Flex>
      </TaskProvider>
    </ChakraProvider>
    </BrowserRouter>
   
  );
}

export default App;
