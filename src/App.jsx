import './App.css'
import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [ products, setProducts ] = useState([])
  const [ loggedIn, setLoggedIn ] = useState(false)
  useEffect(() => {
    axios('http://localhost:9999/api/products', { withCredentials: true }).then(
      response => setProducts(response.data)
    ).catch(
      error => console.log(error)
    )
  }, [])
  return (
    <>
      <Navbar logged={loggedIn} />
      {products.map((product) => (
        <div key={product.id}>{product}</div>
      ))}
      <Footer />
    </>
  )
}

export default App
