import TodoInput from "../components/TODO/TodoInput";
import TodoItem from "../components/TODO/TodoItem";

export function Page2() {

  return (
    <>
      <h1>Todo List</h1>
      <div className="TodoList">
        <TodoInput />
        <TodoItem />
      </div>
    </>
  );
}
