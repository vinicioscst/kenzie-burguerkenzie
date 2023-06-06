import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "../node_modules/react-toastify/dist/ReactToastify.css";

import { api } from './services/api'
import { GlobalReset } from './styles/reset'
import { GlobalStyles } from './styles/global'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal'

function App() {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('/products')

      setProducts(response.data);
    }
    
    getProducts()
  }, [])

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header setIsOpen={setIsOpen} cartProducts={cartProducts} />
      <ProductList products={products} setCartProducts={setCartProducts} cartProducts={cartProducts} toast={toast} />
      {isOpen ? <CartModal setIsOpen={setIsOpen} cartProducts={cartProducts} setCartProducts={setCartProducts} toast={toast}/> : null}
      <ToastContainer autoClose={2000}/>
    </>
  )
}

export default App
