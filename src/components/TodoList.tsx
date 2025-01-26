import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

// Initializes state variables: tasks, isEditing, editingTask, and newTask.
const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>(["Task 1", "Task 2"]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [newTask, setNewTask] = useState("");

  // Adds a new task if newTask is not empty and resets the input field.
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Function to delete a task from the list
  const deleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  // Starts editing a task and sets editingTask to the selected task.
  const editTask = (taskToEdit: string) => {
    setEditingTask(taskToEdit); // Set the task to edit
    setIsEditing(true); // Start editing
  };

  // Saves the edited task and updates tasks. Resets editing state.
  const saveEditedTask = (newText: string) => {
    setTasks(tasks.map((task) => (task === editingTask ? newText : task)));
    setIsEditing(false);
    setEditingTask(null);
  };

  // Renders an input field to add tasks, and a button to add them.
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>

      {/* Map over tasks and render TodoItem component for each */}
      <div className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => deleteTask(task)}
            onEdit={() => editTask(task)}
          />
        ))}
      </div>

      {/* The task is saved when the input field goes out of focus. */}
      {isEditing && editingTask && (
        <div>
          <input
            type="text"
            defaultValue={editingTask}
            onBlur={(e) => saveEditedTask(e.target.value)}
            autoFocus
          />
          <button onClick={() => saveEditedTask(editingTask)}>Save</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
