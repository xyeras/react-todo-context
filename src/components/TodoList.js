import TodoItem from './TodoItem'

const TodoList = ({ todos, updateTodo, removeTodo, setTodo }) => {

    return (
  
      <div>
  
            {todos.map(todo => {
              return (
              
                <TodoItem updateTodo={updateTodo} removeTodo={removeTodo} todo={todo} />
              
              );
            })}
  
      </div>
  
    );
  };
  
  export default TodoList;
  