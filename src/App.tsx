import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    { task: "Doctor appointment", reminder: "" },
    { task: "Meeting with boss", reminder: "" },
  ]);

  // Function to set a reminder for a task
  const setReminder = (taskIndex: number, newReminder: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].reminder = newReminder;
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      {/* Pass tasks and setReminder function to TodoList */}
      // App.tsx
      <TodoList tasks={tasks} setReminder={setReminder} setTasks={setTasks} />
    </div>
  );
};

export default App;
