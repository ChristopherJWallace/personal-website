import { bindActionCreators } from "redux"
import { useDispatch, useSelector } from "react-redux"
import { ActionCreators, State } from "../state";

export function Page1() {

  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney, bankruptMoney} = bindActionCreators(ActionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)

  return (
    <>
      <h1> This is page 1</h1>
      <div className="Page1">
        <h1>{amount.value}</h1>
        <button onClick={() => depositMoney(1)}>Deposit</button>
        <button onClick={() => withdrawMoney(1)}>Withdraw</button>
        <button onClick={() => bankruptMoney()}>Bankrupt</button>
      </div>
    </>
  )
}