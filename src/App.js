import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './PAGES/USERS/HomePage/HomePage'
import Whishlist from './PAGES/USERS/whishlist'
import ProductPage from './PAGES/USERS/ProductPage/ProductPage'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<HomePage/>} />
            <Route path="/home" element ={<HomePage/>} />
            <Route path="*" element ={<div><h1>404 NOT FOUND</h1></div>} />
            <Route path="/yeu-thich" element={<Whishlist/>}/>
            <Route path='/bep' element={<ProductPage catogory = "Bếp"/>}/>
            <Route path='/don-dep' element={<ProductPage catogory = "Dọn dẹp"/>}/>
            <Route path='/tien-ich' element={<ProductPage catogory = "Tiện ích"/>}/>
            
        </Routes>
    </BrowserRouter>

  )
}

export default App