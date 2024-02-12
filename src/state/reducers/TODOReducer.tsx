import { TODOActionType } from "../action-types";
import { TODOAction } from "../actions/index";
import {createSlice, nanoid} from '@reduxjs/toolkit'

interface TODO {
  id: string;
  text: string;
}

interface TODOState {
  todos: TODO[];
}

const initialState: TODOState = {
  todos: [],
};

const TODOReducer = (state: TODOState = initialState, action: TODOAction): TODOState => {
  switch(action.type) {
    case TODOActionType.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            text: action.payload,
          },
        ],
      };
    case TODOActionType.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
export default TODOReducer;