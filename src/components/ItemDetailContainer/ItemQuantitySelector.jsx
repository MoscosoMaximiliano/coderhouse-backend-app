export const ItemQuantitySelector = ({decrease, increase, quantity}) => {
  return (
    <div className="flex items-center justify-center">
        <button className="p-5 bg-orange-300 rounded" onClick={decrease}>-</button>
        <h1 className="px-2">{quantity}</h1>
        <button className="p-5 bg-orange-300 rounded" onClick={increase}>+</button>
    </div>    
  )
}
