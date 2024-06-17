import './App.css'
import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { CardDefault } from './components/Card.jsx'
import { useEffect } from 'react'
import axios from 'axios'

function App () {
  const [products, setProducts] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
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
  }, [])
  return (
    <>
      <Navbar logged={loggedIn} />
      {products.map(product => (
        <CardDefault key={product._id} product={product} />
      ))}
      <Footer />
    </>
  )
}

export default App
