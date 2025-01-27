import { createContext, useEffect, useState } from "react";
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
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("task");
    return savedTask ? JSON.parse(savedTask) : [];
  });
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  // functions

  const addTask = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };
  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => taskId != task.id));
  };
  const removeTask2 = (taskId) => {
    setTasks((prevTasks) => prevTasks.splice(prevTasks.indexOf(taskId), 1));
  };
  const removeTask3 = (taskId) => {
    // Hacer remove pero con find en vez de filter
    // setTasks((prevTasks)=>)
  };
  const editTask = (taskId, Editedtask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id == taskId ? Editedtask : task))
    );
  };
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id == taskId ? { ...task, completed: !completed } : task
      )
    );
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
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
