import { Link } from "react-router-dom"
import { CartContext } from "./provider/CartProvider"
import { useState, useContext } from "react"

import { ItemQuantitySelector } from "./ItemDetailContainer/ItemQuantitySelector"

function ItemUser(item) {
  return (
    <div
      className="flex flex-col max-w-sm p-6 overflow-hidden rounded bg-slate-500">
      <img src={item.photo} alt="IMAGE" className="w-full" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{item.name}</div>
        <p>ROLE: {item.role}</p>
      </div>
      <div className="px-6 pt-5 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          EMAIL: {item.email}
        </span>
      </div>
      {/* <Link className="items-center w-auto p-2 mx-2 my-2 text-center bg-orange-300 rounded-full hover:bg-orange-400" to={`/item/${item.id}`}>Details</Link> */}
    </div>
  )
}

export default ItemUser