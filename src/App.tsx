import TodoList from './components/TodoList';
import './App.css'

const App: React.FC = () => (
  <div className='app-container'>
    <h1>Todo List</h1>
    <TodoList />
  </div>
);

export default App;
