// Reducers are functions that take the current state and an action as arguments, 
// and return a new state based on the action type.

import { TODOActionType } from "../action-types";
import { TODOAction } from "../actions/index";
import {nanoid} from '@reduxjs/toolkit'

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