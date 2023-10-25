import { Menu } from "./components/Menu";
import { Flex } from "@chakra-ui/react";
import { TaskProvider } from "../src/DataContext/TaskContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { Header } from "./components/Header";
import { ChakraUIProvider } from "./Chakra-UI/chakra-ui.provider";

const Home = React.lazy(() => import("./pages/Home"));
const Tasks = React.lazy(() => import("./pages/Tasks"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Login = React.lazy(() => import("./pages/login"));
const Register = React.lazy(() => import("./pages/register"));

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Flex flexDirection={"column"} alignItems={"center"} h="100vh">
          <Flex
            flexDirection={"column"}
            h="30%"
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Header />
            <Menu />
          </Flex>

          <Flex
            h="70%"
            w="100%"
            alignItems={"baseline"}
            justifyContent={"center"}
          >
            <Suspense fallback="Loading...">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tasks" element={<Tasks />}></Route>
                <Route path="/about-us" element={<AboutUs />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              </Routes>
            </Suspense>
          </Flex>
        </Flex>
      </BrowserRouter>
    </>
  );
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
          background="linear-gradient(90deg, rgba(149,40,187,1) 4%, rgba(255,0,0,1) 100%)"
        >
          <AppRouter />
        </Flex>
      </TaskProvider>
    </ChakraUIProvider>
  );
}

export default App;
