import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemUser from "../ItemUser"
import axios from "axios"



// eslint-disable-next-line react/prop-types
function ItemListPage() {
  const { categoryID } = useParams()
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if (categoryID !== undefined) {
      axios(
        `https://coderhouse-backend-production-2030.up.railway.app/api/users`,
        {
          withCredentials: true
        }
      )
        .then(response => {
          console.log(response.data)
          setProducts(response.data.response.docs)
        })
        .catch(error => console.log(error))
    } else {
      axios(
        `https://coderhouse-backend-production-2030.up.railway.app/api/users`,
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
            <ItemUser key={item.id} {...item} />
          )
        })}
    </div>
  )

}

export default ItemListPage