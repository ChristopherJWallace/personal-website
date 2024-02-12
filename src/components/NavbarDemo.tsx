import { useSelector } from "react-redux"
import { RootState } from "./cartCountSlice";


export function NavbarDemo() {

  let cartCount = useSelector((state) => state.cartCount.value)

  return (
  <div className="navbar">
    <h2 className= "cart-container"> number of items: {cartCount}</h2>
  </div>
  )
}