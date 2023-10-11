import { useContext, useEffect, } from "react";
import { TaskContext } from "../DataContext/TaskContext";
import {
  Flex,
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm({ mode: "onChange" });

  const { registered,LogInUser,isError } = useContext(TaskContext);

  useEffect(() => {
    checktheRegister();
  }, [registered]);

  const navigate = useNavigate();

  function checktheRegister() {
    if (registered) {
      navigate("/tasks");
    }
  }

  function handleLogIn(data){
    LogInUser(data.Correo,data.Contraseña)
  }


  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        bg={colorMode === "light" ? "#fff" : "#000009"}
        justifyContent="center"
        borderRadius="10px"
        boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
        w="450px"
        h="300px"
        p="10px"
      >
        <Flex
          justifyContent={"baseline"}
          alignItems={"center"}
          flexDirection={"column"}
          w="100%"
          h="100%"
          
        >
          <Flex flexDirection={"column"}  w="100%" justifyContent={"center"} alignItems={"center"}>
            <form onSubmit={handleSubmit(handleLogIn)}>
              <FormControl  isInvalid={errors.Correo && errors.Contraseña}>
                <Input
                  borderRadius={"0"}
                  boxShadow="-1px 0 0.5px rgba(0, 0, 0, 0.2), 1px 0 0.5px rgba(0, 0, 0, 0.2)"
                  my="5px"
                  type="email"
                  placeholder="Email"
                  {...register("Correo", {
                    required: "email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "email is invalid",
                    },
                  })}
                />
                <FormErrorMessage role="alert">
                  {isSubmitted && errors.Correo && errors.Correo.message}
                </FormErrorMessage>
                <Input
                borderRadius={"0"}
                boxShadow="-1px 0 0.5px rgba(0, 0, 0, 0.2), 1px 0 0.5px rgba(0, 0, 0, 0.2)"
                  
                  my="5px"
                  type="password"
                  placeholder="Password"
                  {...register("Contraseña", {
                    required: "password is required",
                  })}
                />
                <FormErrorMessage role="alert">
                  {isSubmitted &&
                    errors.Contraseña &&
                    errors.Contraseña.message}
                </FormErrorMessage>
                
                <Button
                bg="#127DDB"
                w="100%"
                mt="20px"
                mb="10px"
                type="submit"
                disabled={!isValid}
                fontSize={"20px"}
                fontWeight={"100"}
              >
                Log In
              </Button>
              </FormControl>
            </form>
              {isError && (
                <Box w="100%" h="20px">Email o Password incorret</Box>
              )}

            <a href="">Forgot your password?</a>
            <Button
            mt="30px"
              w="100%"
                bg="#42B72A"
                type="submit"
                disabled={!isValid}
                fontSize={"20px"}
                fontWeight={"100"}
              >
              Create new account
              </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
