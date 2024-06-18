import {TiShoppingCart} from "react-icons/ti"
import { CartContext } from "../provider/CartProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"
// eslint-disable-next-line react/prop-types
function CartWidget() {
  const {CartItemAmount} = useContext(CartContext)

  return (
    <Link to={"/cart"}>
      <div className="relative p-3">
        <TiShoppingCart className="w-12 h-12"/>
        <span className="absolute p-0.5 top-0 right-2 rounded-full bg-red-400 text-white">
          {CartItemAmount()}
        </span>
      </div>
    </Link>
  )
}

export default CartWidget