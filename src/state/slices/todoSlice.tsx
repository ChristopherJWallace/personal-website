import { createSlice, PayloadAction, nanoid} from '@reduxjs/toolkit';

// Handle types => action & action-types
interface Todo {
  id: string;
  text: string;
}
interface TodoState {
  todos: Todo[];
}

// Handle initial state => reducer
const initialState: TodoState = {
  todos: [],
};


export const todoSlice = createSlice({
  name: 'todo', 
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<string>) => {
      const todo: Todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state: TodoState, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
