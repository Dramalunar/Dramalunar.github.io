import { createContext, useEffect, useState, useReducer } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [TaskCount, setTaskCount] = useState(0);
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });
  const [registered, setRegister] = useState(() => {
    const valueFromLocalStorage = localStorage.getItem("isLogin");

    return valueFromLocalStorage === "true";
  });

  const [isError, setIsError] = useState(false);

  function TasksCounts() {
    const incompleteTasks = tasks.filter((task) => !task.status);
    const count = incompleteTasks.length;
    setTaskCount(count);
  }

  function fetchData() {
    fetch("https://task-list-back.onrender.com/tasks/task", {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("error en la respuesta del servidor");
        }
      })
      .then((data) => {
        const dbTask = data.findAllTask;
        setTasks(dbTask);
      })
      .catch((error) => {
        console.log("error en la solicitud", error);
      });
  }

  useEffect(() => {
    if (registered === true) {
      fetchData();
    }
    localStorage.setItem("token", token);
    localStorage.setItem("isLogin", registered);
  }, [token]);

  useEffect(() => {

    CheckSesion();

    if (registered === true) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    TasksCounts();
  }, [tasks]);

  const reducer = async (state, action) => {
    switch (action.type) {
      case "registerUser":
        fetch("https://task-list-back.onrender.com/user/register", {
          method: "POST",
          body: JSON.stringify({
            username: action.payload.UserName,
            email: action.payload.NewEmail,
            password: action.payload.NewPassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            const token = localStorage.getItem("token");
            setToken(token);
            setRegister(true);
          })
          .catch((error) => {
            setRegister(false);
            console.log("Error al crear el token", error);
          });
        break;

      case "loginUser":
        fetch("https://task-list-back.onrender.com/user/login", {
          method: "POST",
          body: JSON.stringify({
            email: action.payload.Email,
            password: action.payload.Password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw Error("Contraseña incorrecta");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            localStorage.setItem("token", data.token);
            const token = localStorage.getItem("token");
            setToken(token);
            setRegister(true);
          })
          .catch((error) => {
            setRegister(false);
            setIsError(true);
            console.log("Error al crear el token", error);
          });
        break;

      case "createTask":
        fetch("https://task-list-back.onrender.com/tasks/create", {
          method: "POST",
          body: JSON.stringify({
            title: action.payload.newTask,
            description: action.payload.newDescription,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              fetchData();
            } else {
              throw new Error("Error al crear una tarea");
            }
          })
          .catch((error) => {
            console.error("Error al crear una tarea:", error);
          });

        break;

      case "deleteTask":
        fetch(`https://task-list-back.onrender.com/tasks/delete/${action.payload.idTask}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              fetchData();
            } else {
              throw new Error("Error al eliminar la tarea");
            }
          })
          .catch((error) => {
            console.error("Error al eliminar la tarea:", error);
          });

        break;

      case "deleteAllTask":
        fetch(`https://task-list-back.onrender.com/tasks/deleteall`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              fetchData();
            } else {
              throw new Error("Error al eliminar todas las tareas");
            }
          })
          .catch((error) => {
            console.error("Error al eliminar las tareas:", error);
          });

        break;

      case "tongleEditMode":
        fetch(`https://task-list-back.onrender.com/tasks/editmode/${action.payload}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              return fetchData();
            } else {
              throw new Error("Error en la respuesta de editmode");
            }
          })
          .catch((error) => {
            console.error(
              "Error al activar el modo editar de la tarea:",
              error,
            );
          });
        break;

      case "updateTask":
        fetch(`https://task-list-back.onrender.com/tasks/update/${action.payload.idTask}`, {
          method: "PUT",
          body: JSON.stringify({
            newTitle: action.payload.editedName,
            newdescrip: action.payload.editedDescrip,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              fetchData();
            } else {
              throw new Error("Error en la actualizar la tarea");
            }
          })
          .catch((error) => {
            console.error("Error al actualizar la tarea:", error);
          });
        break;

      case "completeTask":
        fetch(`https://task-list-back.onrender.com/tasks/complete/${action.payload.idTask}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              fetchData();
            } else {
              console.error("Error al marcar incompleta la tarea");
            }
          })
          .catch(() => {
            console.error("Error en completar la tarea");
          });
        break;

      case "LogOut":
        fetch("https://task-list-back.onrender.com/user/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.status === 200) {
              setToken(" ");
              setRegister(false);
              console.log("Se cerró sesión correctamente");
              return "bien";
            } else {
              setRegister(false);
              throw new Error("La solicitud no fue exitosa.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        break;

        case "CheckSesion":
        fetch("https://task-list-back.onrender.com/user/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
          .then((response) => {
            if (response.status !== 200) {
              setRegister(false);
              throw new Error("Sesion Caducada.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        break;

      case "incompleteTask":
        fetch(
          `https://task-list-back.onrender.com/tasks/incomplete/${action.payload.idTask}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `${token}`,
            },
          },
        )
          .then((response) => {
            if (response.ok) {
              fetchData();
            } else {
              console.error("Error al marcar incompleta la tarea");
            }
          })
          .catch((error) => {
            console.error("Error en completar la tarea", error);
          });
        break;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, tasks);

  const UpdateTask = (idTask, editedName, editedDescrip) => {
    dispatch({
      type: "updateTask",
      payload: { idTask, editedName, editedDescrip },
    });
  };

  const CreateUser = (UserName, NewEmail, NewPassword) => {
    dispatch({
      type: "registerUser",
      payload: { UserName, NewEmail, NewPassword },
    });
  };

  const LogInUser = (Email, Password) => {
    dispatch({
      type: "loginUser",
      payload: { Email, Password },
    });
  };

  const DeleteTask = (idTask) => {
    dispatch({ type: "deleteTask", payload: { idTask } });
  };

  const LogOut = () => {
    dispatch({ type: "LogOut" });
  };

  const CheckSesion = () => {
    dispatch({ type: "CheckSesion" });
  };

  const DeleteAllTask = () => {
    dispatch({ type: "deleteAllTask" });
  };

  const CompleteTask = (idTask) => {
    dispatch({ type: "completeTask", payload: { idTask } });
  };

  const IncompleteTask = (idTask) => {
    dispatch({ type: "incompleteTask", payload: { idTask } });
  };

  const EditMode = (idTask) => {
    dispatch({ type: "tongleEditMode", payload: idTask });
  };

  return (
    <TaskContext.Provider
      value={{
        setIsError,
        setToken,
        setRegister,
        LogOut,
        isError,
        LogInUser,
        registered,
        UpdateTask,
        CreateUser,
        DeleteAllTask,
        EditMode,
        IncompleteTask,
        CompleteTask,
        DeleteTask,
        tasks,
        dispatch,
        TaskCount,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
