import { Menu } from "./components/Menu";
import { Flex} from "@chakra-ui/react";
import { TaskProvider } from "../src/DataContext/TaskContext";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import React,{ Suspense } from "react";
import {Header} from "./components/Header"
import { ChakraUIProvider } from "./Chakra-UI/chakra-ui.provider";

const Home = React.lazy(() => import("./pages/Home"))
const Tasks = React.lazy(() => import("./pages/Tasks"))
const AboutUs = React.lazy(() => import("./pages/AboutUs"))




 
  

function AppRouter () {

  

  return (
    <>
    <BrowserRouter> 
    <Header />
      <Menu />
    <Suspense fallback="Loading...">
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tasks" element={<Tasks/> }></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
       </Routes>
      </Suspense>
     </BrowserRouter>
    </>
  )
}

function App() {
  return (
    
  <ChakraUIProvider> 
    <TaskProvider>
        <Flex
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="baseline"
          flexDirection="column"
          
          background="radial-gradient(circle, rgba(219,242,39,1) 7%, rgba(159,193,49,1) 40%, rgba(4,41,64,1) 75%)"
        >
         
          <AppRouter />

        </Flex>
      </TaskProvider>
  </ChakraUIProvider> 
     
    
    
   
  );
}

export default App;
