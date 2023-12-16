import React from 'react'
// import { useParams } from 'react-router-dom'
import Navbar from '../../../COMPONENTS/Navbar/Navbar';
import AllProducts from '../../../COMPONENTS/Products/AllProducts';
import CategorySidebar from '../../../COMPONENTS/Products/CategorySidebar';
import './ProductPage.scss'


const ProductPage = () => {
  // const {procate} = useParams()
  return (
    <div>
        <Navbar/>
        <div className='Frame__Product_Page'>
          {/* <BannerSlider/> */}
          
          <CategorySidebar className="s1"/>
          <AllProducts className="s2"/>
         
        </div>
    </div>
  )
                }

export default ProductPage