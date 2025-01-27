import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Task {
  task: string;
  reminder: string;
}

// TodoList.tsx
interface TodoListProps {
  tasks: Task[];
  setReminder: (taskIndex: number, newReminder: string) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // Add setTasks here
}


const TodoList: React.FC<TodoListProps> = ({ tasks, setTasks, setReminder }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { task: newTask, reminder: "" }]);
      setNewTask("");
    }
  };

  const deleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter((task) => task.task !== taskToDelete));
  };

  const editTask = (taskToEdit: string) => {
    setEditingTask(taskToEdit);
    setIsEditing(true);
  };

  const saveEditedTask = (newText: string) => {
    setTasks(tasks.map((task) => (task.task === editingTask ? { ...task, task: newText } : task)));
    setEditingTask(null);
    setIsEditing(false);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          taskIndex={index}
          setReminder={setReminder}
          onDelete={() => deleteTask(task.task)} 
          onEdit={() => editTask(task.task)}
        />
      ))}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {isEditing && (
        <div>
          <input
            type="text"
            value={editingTask || ""}
            onChange={(e) => setEditingTask(e.target.value)}
          />
          <button onClick={() => saveEditedTask(editingTask || "")}>Save Task</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;