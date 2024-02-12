import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators, State } from "../state";

export function Page2() {
  // useDispatch hook to get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // bindActionCreators to automatically bind action creators to the dispatch function
  const { addTodo, removeTodo } = bindActionCreators(ActionCreators, dispatch);

  // useSelector hook to access the todos array from the Redux state
  const todos = useSelector((state: State) => state.todo.todos);

  // useState hook to manage the state of the new todo item's text
  const [newTodoText, setNewTodoText] = useState("");

  // Function to handle adding a new todo item
  // It dispatches the addTodo action with the newTodoText, then clears the input field
  const handleAddTodo = () => {
    if (!newTodoText.trim()) return; // Prevent adding empty todos
    addTodo(newTodoText);
    setNewTodoText(""); // Clear the input field after adding
  };

  // Function to handle removing a todo item
  // It dispatches the removeTodo action with the todo item's id
  const handleRemoveTodo = (id: string) => {
    removeTodo(id);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="TodoList">
        <input
          type="text"
          value={newTodoText} // The input field is controlled by newTodoText state
          onChange={(e) => setNewTodoText(e.target.value)} // Update state on input change
          placeholder="Add new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button> {/* Button to trigger adding a new todo */}

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}> {/* Each todo item is listed with a unique key */}
              {todo.text} <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button> {/* Button to remove a todo item */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
