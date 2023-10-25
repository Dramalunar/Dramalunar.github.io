import {
  Box,
  Button,
  Flex,
  Input,
  UnorderedList,
  Text,
  Stack,
  FormErrorMessage,
  FormControl,
  useColorMode,
} from "@chakra-ui/react";
import { Task } from "../components/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext} from "react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../DataContext/TaskContext";

const TaskList = () => {
  const { colorMode } = useColorMode();

  const { dispatch, tasks, TaskCount, DeleteAllTask } = useContext(TaskContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm({ mode: "onChange" });

  const createTask = (newTask, newDescription) => {
    dispatch({
      type: "createTask",
      payload: {
        newTask,
        newDescription,
      },
    });
  };

  const handleAddTask = (data) => {
    createTask(data.newTask, data.newDescription);
    reset();
  };

  const handleClearAll = () => {
    DeleteAllTask();
  };

  return (
    <Flex
      w="360px"
      maxH="440px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      borderRadius="10px"
      padding="20px"
      boxShadow="1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4)"
      bg={colorMode === "light" ? "#fff" : "#000009"}
    >
      <Flex>
        <form onSubmit={handleSubmit(handleAddTask)}>
          <FormControl isInvalid={errors.newTask}>
            <Stack w="300px" direction="row">
              <Stack>
                <Input
                  type="text"
                  {...register("newTask", {
                    required: "Esto es requerido",
                    minLength: {
                      value: 3,
                      message: "The task is  very short",
                    },
                  })}
                  placeholder="Add you new task"
                  w="225px"
                  borderColor="gray"
                />
                <FormErrorMessage m="0" role="alert">
                  {isSubmitted && errors.newTask && errors.newTask.message}
                </FormErrorMessage>

                <Input
                  m="0"
                  type="text"
                  {...register("newDescription")}
                  borderColor="gray"
                  placeholder="Add your task description"
                />
              </Stack>
              <Button
                type="submit"
                disabled={!isValid}
                bg="#127DDB"
                justifyContent="center"
                w="60px"
                h="90px"
                borderRadius="5px"
                m=" 0 0 15px 8px"
                _hover={{ background: "#2D2FF4" }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ color: "#ffffff", fontSize: "20px" }}
                />
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Flex>
      <Flex flexDirection={"column-reverse"} maxH="200px" overflowY={"auto"}>
        {tasks.map((task) => (
          <Task key={task._id} task={task} dispatch={dispatch} />
        ))}
      </Flex>

      <Box
        display="flex"
        w="320px"
        justifyContent="center"
        alignItems="center"
        pt="20px"
      >
        <Text>You have {TaskCount} pending task</Text>
        <Button
          onClick={handleClearAll}
          display="flex"
          bg="#F43423"
          _hover={{ background: "#F50801" }}
          color="#fff"
          borderRadius="3px"
          m="0 0 0 50px"
        >
          Clear All
        </Button>
      </Box>
    </Flex>
  );
};
export default TaskList;
