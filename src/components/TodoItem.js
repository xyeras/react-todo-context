const TodoItem = ( {updateTodo, removeTodo, todo} ) => {
    
    return (

        <div className="list-group">
  
        <div className="list-group-item list-group-item-action">

          <div className="d-flex w-100 justify-content-between">

            <h5 className="mb-1">{todo.name}</h5>

            {/* <small class="text-muted">Quest ID #{todo.id}</small> */}
            <small className="text-muted">Difficulty: {todo.difficulty}</small>
          </div>

          <p className="mb-1">{todo.description}</p>

          {/* <small class="text-muted">Difficulty: {todo.difficulty}</small> */}
            <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">Quest ID #{todo.id}</small>

                <label htmlFor="">
                    <input type='checkbox' checked={todo.completed} onChange={() => updateTodo(todo)}/>
                </label>

            </div>

          </div>

          <button
            className='btn btn-success mb-2'
            onClick={() => removeTodo(todo.id)}>
            Complete quest
          </button>

      </div>
    );
  }
  
  export default TodoItem;