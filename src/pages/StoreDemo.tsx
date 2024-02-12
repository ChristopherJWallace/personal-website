import { useState } from "react"
import { UseDispatch, useDispatch } from "react-redux"
import {increment,decrement, incrementByAmount} from "../components/cartCountSlice"

export function StoreDemo() {

  // const [cartCount, setCartCount] = useState(0)
  const [incrementAmount, setIncrementAmount] = useState(0)

  let dispatch = useDispatch()

  return (
    <>
      <div className="product">
        <h2> Protein Powder</h2>
        <div className="button-section">
          <button onClick={() => dispatch(increment())} className="button">+</button>
          <button onClick={() => dispatch(decrement())} className="button">-</button>
          {/* <input onChange={(e) => setIncrementAmount(parseInt(e.target.value))} className="input">-</input> */}
          <button onClick={() => dispatch(incrementByAmount(incrementAmount))} className="button">Add X Items</button>
        </div>
      </div>
      <h3> Number of items in cart: {}</h3>
    </>
  )
}