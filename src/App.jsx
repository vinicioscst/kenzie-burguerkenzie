import { useState } from 'react'
import { GlobalReset } from './styles/reset'
import { GlobalStyles } from './styles/global'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
    </>
  )
}

export default App
