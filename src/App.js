import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './PAGES/USERS/HomePage/HomePage'
import Whishlist from './PAGES/USERS/whishlist'
import ProductPage from './PAGES/USERS/ProductPage/ProductPage'
import ProductDetailPage from "./PAGES/USERS/ProductDetailPage/ProductDetailPage"
import Cart from './PAGES/USERS/Cart/Cart'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<HomePage/>} />
            <Route path="/home" element ={<HomePage/>}/>
            
            <Route path="*" element ={<div><h1>404 NOT FOUND</h1></div>} />
            <Route path="/yeu-thich" element={<Whishlist/>}/>
            <Route path="/gio-hang" element={<Cart/>}/>
            <Route path="product/:prodid"
              element={<ProductDetailPage/>}/> 
            <Route path='/bep' element ={<ProductPage/>}/>
            <Route path="/home/:prodcate" element ={<HomePage/>}/>
            
        </Routes>
    </BrowserRouter>

  )
}

export default App