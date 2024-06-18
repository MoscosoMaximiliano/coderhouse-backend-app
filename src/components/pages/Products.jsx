import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Item from "../Item"

const Products = () => {
  const { categoryID } = useParams()
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if (categoryID !== undefined) {
      axios(
        `https://coderhouse-backend-production-2030.up.railway.app/api/products/${categoryID}`,
        {
          withCredentials: true
        }
      )
        .then(response => {
          setProducts(response.data.response.docs)
        })
        .catch(error => console.log(error))
    } else {
      axios(
        `https://coderhouse-backend-production-2030.up.railway.app/api/products`,
        {
          withCredentials: true
        }
      )
        .then(response => {
          setProducts(response.data.response.docs)
        })
        .catch(error => console.log(error))
    }

    setLoading(false)
  }, [ categoryID ])

  return (
    <div className="grid grid-cols-3 gap-10 p-3 mx-12 overflow-x-hidden">
      {loading ? (<h1>Loading Products</h1>)
        : products.map((item) => {
          return (
            <Item key={item.id} {...item} />
          )
        })}
    </div>
  )
}

export default Products