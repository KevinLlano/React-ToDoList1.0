import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Task {
  task: string;
  reminder: string;
}

interface TodoListProps {
  tasks: Task[];
  setReminder: (taskIndex: number, newReminder: string) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, setTasks, setReminder }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskOriginal, setEditingTaskOriginal] = useState<string | null>(null);
  const [editedTaskText, setEditedTaskText] = useState('');
  const [newTask, setNewTask] = useState('');

  // Add missing function implementations
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { task: newTask.trim(), reminder: '' }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter(task => task.task !== taskToDelete));
  };

  const editTask = (taskToEdit: string) => {
    setEditingTaskOriginal(taskToEdit);
    setEditedTaskText(taskToEdit);
    setIsEditing(true);
  };

  const saveEditedTask = () => {
    if (editingTaskOriginal && editedTaskText.trim()) {
      setTasks(tasks.map(task => 
        task.task === editingTaskOriginal ? { ...task, task: editedTaskText.trim() } : task
      ));
      setEditingTaskOriginal(null);
      setEditedTaskText('');
      setIsEditing(false);
    }
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={`${task.task}-${index}`}
          task={task}
          taskIndex={index}
          setReminder={setReminder}
          onDelete={() => deleteTask(task.task)}
          onEdit={() => editTask(task.task)}
        />
      ))}
      
      {/* Add Task Section */}
      <div className="add-task-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Edit Task Section */}
      {isEditing && (
        <div className="edit-task-container">
          <input
            type="text"
            value={editedTaskText}
            onChange={(e) => setEditedTaskText(e.target.value)}
            placeholder="Edit task"
          />
          <button onClick={saveEditedTask}>Save Task</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;