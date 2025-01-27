import React from 'react';
import './TodoItem.css';
import Reminder from './Reminder';

interface Task {
  task: string;
  reminder: string;
}

interface TodoItemProps {
  task: Task;
  taskIndex: number;
  setReminder: (taskIndex: number, newReminder: string) => void;
  onDelete: () => void;
  onEdit: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, taskIndex, setReminder, onDelete, onEdit }) => {
  return (
    <div className="todo-item">
      <h3>{task.task}</h3>
      <Reminder taskIndex={taskIndex} reminder={task.reminder} setReminder={setReminder} />
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default TodoItem;
