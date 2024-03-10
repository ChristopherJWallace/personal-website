// Combines reducers to export 

import { combineReducers } from "@reduxjs/toolkit";
import bankReducer from "./BankReducer"

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers

export type State = ReturnType<typeof reducers>