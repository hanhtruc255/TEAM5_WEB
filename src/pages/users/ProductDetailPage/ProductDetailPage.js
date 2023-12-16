import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const {prodid} = useParams()
  
  return (
    <div>
    <h1> product is - {prodid}</h1>


    </div>
    // video 5,6,7
  )
}

export default ProductDetailPage