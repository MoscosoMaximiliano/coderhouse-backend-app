import NavBar from './components/Navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CartProvider from './components/provider/CartProvider.jsx'
import { Cart } from './components/Cart/PaidDetails'

import Users from './components/pages/Users.jsx'
import NoResultPage from './components/pages/NoResultPage'
import Products from './components/pages/Products.jsx'
import PaymentPage from './components/pages/PaymentPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Users />} />
          {/* <Route
            exact
            path='/category/:categoryID'
            element={<ItemListPage />}
          /> */}
          {/* <Route exact path='/item/:id' element={<ItemDetailPage />} /> */}

          <Route exact path='/products' element={<Products />} />

          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/payment' element={<PaymentPage />} />
          <Route exct path='*' element={<NoResultPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
  // const [products, setProducts] = useState([])
  // const [loggedIn, setLoggedIn] = useState(false)
  // useEffect(() => {
  //   axios(
  //     `https://coderhouse-backend-production-2030.up.railway.app/api/products`,
  //     {
  //       withCredentials: true
  //     }
  //   )
  //     .then(response => {
  //       setProducts(response.data.response.docs)
  //     })
  //     .catch(error => console.log(error))
  // }, [])
  // return (
  //   <>
  //     <Navbar logged={loggedIn} />
  //     {products.map(product => (
  //       <CardDefault key={product._id} product={product} />
  //     ))}
  //     <Footer />
  //   </>
  // )
}

export default App
