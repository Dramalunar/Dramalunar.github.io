import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPenSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../DataContext/TaskContext";

export const Task = ({ task, dispatch }) => {
  const { UpdateTask, DeleteTask, CompleteTask, IncompleteTask, EditMode } =
    useContext(TaskContext);

  const { colorMode } = useColorMode();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm({
    defaultValues: {
      EditedTitle: task.title,
      EditedDescrip: task.description,
    },
  });

  const idTask = task._id;

  const handleUpdateTask = (data) => {
    UpdateTask(idTask, data.EditedTitle, data.EditedDescrip);
  };

  const handleDeleteTask = () => {
    DeleteTask(idTask);
  };

  const handleCompleteTask = () => {
    CompleteTask(idTask);
  };
  const handleIncompleteTask = () => {
    IncompleteTask(idTask);
  };

  const handleEditMode = () => {
    EditMode(idTask);
  };

  if (task.editMode) {
    return (
      <Flex
        justifyContent={"center"}
        alignItems="center"
        w="301px"
        bg={colorMode === "light" ? "#fff" : "#2E2A29"}
        borderRadius={"10px"}
        mb="10px"
      >
        <form onSubmit={handleSubmit(handleUpdateTask)}>
          <FormControl isInvalid={errors.EditedTitle}>
            <Stack direction={"row"} alignItems={"center"} p="5px">
              <Stack direction={"column"}>
                <Input
                  m="0"
                  type="text"
                  {...register("EditedTitle", {
                    required: "The task is required",
                  })}
                />
                <FormErrorMessage>
                  {isSubmitted &&
                    errors.EditedTitle &&
                    errors.EditedTitle.message}
                </FormErrorMessage>
                <Textarea
                  type="text"
                  maxH="90px"
                  resize="none"
                  {...register("EditedDescrip")}
                />
              </Stack>
              <Stack>
                <Button h="128px" type="submit" disabled={!isValid}>
                  <FontAwesomeIcon icon={faFloppyDisk} />
                </Button>
              </Stack>
            </Stack>
          </FormControl>
        </form>
      </Flex>
    );
  } else {
    return (
      <Flex flexDirection={"column"}>
        <Flex
          justifyContent="center"
          alignItems="center"
          pl="10px"
          h="35px"
          bg={colorMode === "light" ? "#fff" : "#2E2A29"}
          mb="10px"
        >
          <Checkbox
            isChecked={task.status}
            id={`checkbox-${task._id}`}
            name={`checkbox-${task._id}`}
            onChange={task.status ? handleIncompleteTask : handleCompleteTask}
            borderColor="gray"
            colorScheme="green"
          />

          <FormLabel
            className="textoTarea"
            htmlFor={`checkbox-${task._id}`}
            w="200px"
            display="inline-block"
            m="0 5px"
          >
            {task.title}
          </FormLabel>

          <Button
            onClick={handleEditMode}
            display="inline-block"
            textAlign="center"
            h="30px"
            mr="-15px"
            fontSize="18px"
            variant="unstyled"
          >
            <FontAwesomeIcon icon={faPenSquare} style={{ color: "#113AF4" }} />
          </Button>

          <Button
            onClick={handleDeleteTask}
            display="inline-block"
            textAlign="center"
            h="30px"
            variant="unstyled"
          >
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "#FA4B3F" }} />
          </Button>
        </Flex>
        {task.description && (
          <Box
            borderRadius="0 0 10px 10px"
            bg={colorMode === "light" ? "#B4EAFA" : "#2E2A29"}
            w="301px"
            mt="-10px"
            mb="10px"
            p=" 5px 0 10px 10px"
          >
            <h4>{task.description}</h4>
          </Box>
        )}
      </Flex>
    );
  }
};
