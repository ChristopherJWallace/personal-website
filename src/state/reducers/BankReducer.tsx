// Reducers are functions that take the current state and an action as arguments, 
// and return a new state based on the action type.

import { BANKActionType } from "../action-types";
import { BANKAction } from "../actions/index"


interface BANKState {
  value: number;
}

const initialBankState: BANKState = {
  value: 0,
};

export const BANKReducer = (state: BANKState = initialBankState, action: BANKAction): BANKState => {
  switch (action.type) {
    case BANKActionType.DEPOSIT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case BANKActionType.WITHDRAW:
      return {
        ...state,
        value: state.value - action.payload,
      };
    case BANKActionType.BANKRUPT:
      return initialBankState; // Resets to initial state
    default:
      return state;
  }
};

export default BANKReducer