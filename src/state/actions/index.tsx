// Defines interfaces and all possible combinations of actions within

import { BANKActionType } from "../action-types"
interface DepositAction {
  type: BANKActionType.DEPOSIT
  payload: number
}
interface WithdrawAction {
  type: BANKActionType.WITHDRAW
  payload: number
}
interface BankruptAction {
  type: BANKActionType.BANKRUPT
}
export type BANKAction = DepositAction|WithdrawAction|BankruptAction


import { TODOActionType } from "../action-types"
interface AddTodoAction {
  type: TODOActionType.ADD_TODO;
  payload: string;
}
interface RemoveTodoAction {
  type: TODOActionType.REMOVE_TODO;
  payload: string;
}
export type TODOAction = AddTodoAction | RemoveTodoAction;
