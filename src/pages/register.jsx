import { useContext, useEffect } from "react";
import { TaskContext } from "../DataContext/TaskContext";
import {
  Flex,
  Heading,
  Input,
  Stack,
  FormControl,
  FormErrorMessage,
  Button,
  useColorMode,
  FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm({ mode: "onChange" });

  const { CreateUser, registered } = useContext(TaskContext);

  useEffect(() => {
    checktheRegister();
  }, [registered]);

  const navigate = useNavigate();

  function checktheRegister() {
    if (registered) {
      navigate("/tasks");
    }
  }

  const { colorMode } = useColorMode();

  function handleCreateUser(data) {
    CreateUser(data.Name, data.Correo, data.Contraseña);
    
    reset();
  }

  return (
    <>
      <Flex
        bg={colorMode === "light" ? "#fff" : "#000009"}
        justifyContent="center"
        borderRadius="10px"
        boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
        w="450px"
        h="380px"
        p="15px"
      >
        <Flex
          justifyContent={"baseline"}
          alignItems={"center"}
          flexDirection={"column"}
          w="100%"
          h="100%"
        >
          <Heading mb="10px">Create your account</Heading>
          <Flex
            flexDirection={"column"}
            w="100%"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <form onSubmit={handleSubmit(handleCreateUser)}>
              <FormControl isInvalid={errors.Correo && errors.Contraseña}>
                <FormLabel m="0">Your Name</FormLabel>
                <Input
                  mb="10px"
                  borderRadius={"0"}
                  boxShadow="-1px 0 0.5px rgba(0, 0, 0, 0.2), 1px 0 0.5px rgba(0, 0, 0, 0.2)"
                  type="name"
                  placeholder="Your Name"
                  {...register("Name", {
                    required: "Your name is required",
                  })}
                />
                <FormErrorMessage>
                  {isSubmitted && errors.Name && errors.Name.message}
                </FormErrorMessage>
                <FormLabel m="0">Email Address</FormLabel>
                <Input
                  mb="10px"
                  borderRadius={"0"}
                  boxShadow="-1px 0 0.5px rgba(0, 0, 0, 0.2), 1px 0 0.5px rgba(0, 0, 0, 0.2)"
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
                <FormLabel m="0">Password</FormLabel>
                <Input
                  borderRadius={"0"}
                  boxShadow="-1px 0 0.5px rgba(0, 0, 0, 0.2), 1px 0 0.5px rgba(0, 0, 0, 0.2)"
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
                  fontSize={"30px"}
                  fontWeight={"100"}
                >
                  Sing up
                </Button>
              </FormControl>
            </form>

            <a href="">Have an account? Log in now</a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Register;
