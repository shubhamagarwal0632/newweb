import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import CartPage from './components/Cartpage'

function App() {

  return (
    <>

      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<ProductCard />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
