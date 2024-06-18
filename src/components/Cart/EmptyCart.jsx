import { BsBagHeart } from 'react-icons/bs'

import { Link } from "react-router-dom"
export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center w-full h-full mt-16 text-center">
      <BsBagHeart className="w-48 h-48 text-gray-400"/>
      <p>The cart is empty</p>
      <b>Start buying</b>
      <Link className="items-center w-auto p-2 mx-2 my-2 text-center bg-orange-300 rounded" to={"/"}>
        Go to main page
      </Link>
    </div>
  )
}
