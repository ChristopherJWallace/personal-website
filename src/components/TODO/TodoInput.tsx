import React, { useState , ChangeEvent } from "react";
import { bindActionCreators } from "redux";
import { useDispatch} from "react-redux";
import { ActionCreators} from "../../state";


export function TodoInput() {
  // useDispatch hook to get the dispatch function from the Redux store
  // bindActionCreators to automatically bind action creators to the dispatch function
  const dispatch = useDispatch();
  const { addTodo} = bindActionCreators(ActionCreators, dispatch);

  // useState hook to manage the state of the new todo item's text
  // Function to handle adding a new todo item
  // It dispatches the addTodo action with the newTodoText, then clears the input field
  const [newTodoText, setNewTodoText] = useState('');
  const handleAddTodo = () => {
    if (!newTodoText.trim()) return;
    addTodo(newTodoText);
    setNewTodoText("")
  }

  return (
    <div>
      <input 
        type="text"
        value={newTodoText}
        onChange = {(e) => setNewTodoText(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}> Add Todo</button>
    </div>
  )
}

export default TodoInput;