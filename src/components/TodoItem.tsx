import './TodoItem.css';

interface TodoItemProps {
  task: string;
  onDelete: () => void;
  onEdit: () => void; // Add onEdit function
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete, onEdit }) => (
  <div className="todo-item">
    {task}
    <button onClick={onDelete}>Delete</button>
    <button onClick={onEdit}>Edit</button>
  </div>
);

export default TodoItem;
