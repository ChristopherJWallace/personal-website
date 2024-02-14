// Combines reducers to export 

import { combineReducers } from "@reduxjs/toolkit";
import bankReducer from "./BankReducer"
import TODOReducer from "./TODOReducer";
import TODOSliceReducer from "../slices/todoSlice"

const reducers = combineReducers({
  bank: bankReducer,
  todo: TODOReducer,
  todoslice: TODOSliceReducer,
});

export default reducers

export type State = ReturnType<typeof reducers>