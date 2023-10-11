import { useContext, useReducer } from "react";
import { TaskContext } from "../DataContext/TaskContext";

export const useTask = () => {

  const { editMode, tasks, taskCount, setTaskCount, checked } =
    useContext(TaskContext);

  

  const updateTask = (updateId, editedName, editedDescrip) => {
    dispatch({
      type: "updateTask",
      payload: {
        updateId,
        editedName,
        editedDescrip,
      },
    });
  };

  const deteledTask = (taskId) => {
    dispatch({ type: "deleteTask", payload: taskId });
    setTaskCount(taskCount - 1);
  };

  const tongleEditMode = (editId) => {
    dispatch({ type: "tongleEditMode", payload: editId });
  };

  const checkedBox = (checkedId) => {
    dispatch({ type: "checkedBox", payload: checkedId });
    setTaskCount((prevCount) => {
      const task = state.tasks.find((task) => task.id === checkedId);
      return prevCount + (task && task.status ? +1 : -1);
    });
  };

  const clearAll = () => {
    dispatch({ type: "clearAll" });
    setTaskCount(0);
  };

  return {
    tasks: state.tasks,
    taskCount,
    setTaskCount,
    createTask,
    updateTask,
    deteledTask,
    tongleEditMode,
    checkedBox,
    clearAll,
  };
};
