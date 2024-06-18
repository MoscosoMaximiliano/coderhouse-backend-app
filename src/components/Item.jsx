import { Link } from "react-router-dom"
import { CartContext } from "./provider/CartProvider"
import { useState, useContext } from "react"

import { ItemQuantitySelector } from "./ItemDetailContainer/ItemQuantitySelector"

function Item(item) {
  const [ quantity, setQuantity ] = useState(0)
  const { AddItemToCart } = useContext(CartContext)

  const handleQuantityIncrease = () => {
    const result = quantity + 1
    if (result <= item.stock) {
      setQuantity(result)
    }
  }

  const handleQuantityDecrease = () => {
    const result = quantity - 1
    if (result >= 0) {
      setQuantity(result)
    }
  }

  const SendItemToCart = () => AddItemToCart(item, quantity)

  return (
    <div
      className="flex flex-col max-w-sm p-6 overflow-hidden rounded bg-slate-500">
      <img src={item.image} alt="IMAGE" className="w-full" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{item.title}</div>
        <p>Price: ${item.price}</p>
      </div>
      <div className="px-6 pt-5 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          Stock: {item.stock}
        </span>
      </div>
      <ItemQuantitySelector increase={handleQuantityIncrease} decrease={handleQuantityDecrease} quantity={quantity} />
      <p className="text-center"><b>Total Price</b>: ${item.price * quantity}</p>
      <Link className="items-center w-auto p-2 mx-2 my-2 text-center bg-orange-300 rounded-full hover:bg-orange-400" to={"/"} onClick={SendItemToCart}>Add to cart</Link>
      {/* <Link className="items-center w-auto p-2 mx-2 my-2 text-center bg-orange-300 rounded-full hover:bg-orange-400" to={`/item/${item.id}`}>Details</Link> */}
    </div>
  )
}

export default Item