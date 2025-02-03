import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

interface Task {
  task: string;
  reminder: string;
}

const App: React.FC = () => {
  // Load tasks from localStorage on initial load
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { task: "Doctor appointment", reminder: "" },
      { task: "Meeting with boss", reminder: "" }
    ];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
    console.log("Saved tasks to localStorage:", tasks);
  }, [tasks]);

  // Debugginging Loging tasks to see if it changes
  // useEffect(() => {
  //   console.log("Current tasks:", tasks);
  // }, [tasks]);

  const setReminder = (taskIndex: number, newReminder: string) => {
    setTasks(prevTasks => 
      prevTasks.map((task, index) => 
        index === taskIndex ? { ...task, reminder: newReminder } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoList tasks={tasks} setReminder={setReminder} setTasks={setTasks} />
    </div>
  );
};

export default App;