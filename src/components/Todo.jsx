// eslint-disable-next-line react/prop-types
const Todo = ({ todo, onRemoveHandler }) => {
    return (
      <div className="todo-list">
        <p>{todo}</p>
        <button onClick={() => onRemoveHandler(todo)}>remove</button>
      </div>
    );
  };
  
  export default Todo;