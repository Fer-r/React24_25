import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container mx-auto p4 ">
      <h1 className="text-center font-bold text-3xl text-blue-700">
        Gestor de Task App
      </h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
