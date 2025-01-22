import { createContext, useState } from "react";
/**
 * Una tarea tine que tener
 * {
 * id:String
 * title:String
 * complete:Boolean
 * }
 */

// Crear el contexto
export const TaskContext = createContext();
// crear el proeedor (provider) del contexto
export const TaskProvidder = ({ children }) => {
  //   Acciones sobre una tarea
  // agregar
  // eliminar
  // editar
  // marcar como completada
  // No olvidar que las tareas han de estar guardadas en el localStorage (para este ejercicio)
  // hooks
  const [task, setTask] = useState(() => {
    const savedTask = localStorage.getItem("task");
    return savedTask ? JSON.parse(savedTask) : [];
  });

  // functions

  const addTask = (task) => {
    setTask((prevTasks) => {
      [...prevTasks, task];
    });
  };
  const removeTask = (taskId) => {
    setTask((prevTasks) => prevTasks.filter((task) => taskId != task.id));
  };
  const removeTask2 = (taskId) => {
    // Hacer remove pero con find en vez de filter
    setTask((prevTasks) => prevTasks.splice(prevTasks.indexOf(taskId), 1));
  };
  const editTask = (taskId, Editedtask) => {
    setTask((prevTasks) =>
      prevTasks.map((task) => (task.id == taskId ? Editedtask : task))
    );
  };
  const toggleTaskCompletion = (taskId) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id == taskId ? { ...task, completed: !completed } : task
      )
    );
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: task,
        addTask,
        removeTask,
        editTask,
        toggleTaskCompletion,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
