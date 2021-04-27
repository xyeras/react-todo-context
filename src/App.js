import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

const App = () => {
  return (
    <div className="container my-5">
        <TodoInput />
        <TodoList />
        <TodoItem />
    </div>
  );
}

export default App;
