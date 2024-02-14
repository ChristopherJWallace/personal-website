import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators, State } from "../../state";

export function TodoItem() {
  // useDispatch hook to get the dispatch function from the Redux store
  // bindActionCreators to automatically bind action creators to the dispatch function
  // useSelector hook to access the todos array from the Redux state
  const dispatch = useDispatch();
  const { removeTodo } = bindActionCreators(ActionCreators, dispatch);
  const todos = useSelector((state: State) => state.todo.todos);

  // Function to handle removing a todo item
  // It dispatches the removeTodo action with the todo item's id
  const handleRemoveTodo = (id: string) => {
    removeTodo(id);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {/* Each todo item is listed with a unique key */}
            {todo.text} <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button> {/* Button to remove a todo item */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItem;