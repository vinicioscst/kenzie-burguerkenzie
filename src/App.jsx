import { useEffect, useState } from 'react'
import { GlobalReset } from './styles/reset'
import { GlobalStyles } from './styles/global'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { api } from './services/api'

function App() {
  const [products, setProducts] = useState([])

  
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
      <Header />
      <ProductList products={products}/>
    </>
  )
}

export default App
