// Action creators in Redux are functions that create and return action objects. 
// Actions themselves are plain JavaScript objects that contain a type property, 
// which indicates the type of action being performed, and often a payload property, 
// which carries the data necessary for the action.

import { Dispatch } from "redux"

// Bank Button
import {BANKAction} from "../actions/index"
import { BANKActionType } from "../action-types"
export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<BANKAction>) => {
    dispatch({
      type: BANKActionType.DEPOSIT,
      payload: amount
    });
  };
};
export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BANKAction>) => {
    dispatch({
      type: BANKActionType.WITHDRAW,
      payload: amount
    });
  };
};
export const bankruptMoney = () => {
  return (dispatch: Dispatch<BANKAction>) => {
    dispatch({
      type: BANKActionType.BANKRUPT
    });
  };
};
