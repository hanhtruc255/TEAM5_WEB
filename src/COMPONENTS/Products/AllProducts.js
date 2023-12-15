import React from 'react';
import ProductCard from './ProductCard';
import AllProductsData from '../../ASSETS/product';
import "./style.scss"



const AllProducts = () => {
  return (
    <div>
        <div className='All__Products'>
            <h1>AllProducts</h1>
            <div className='Products'>
                {AllProductsData.map((item) =>{               
                        return(
                            <ProductCard data={item} key={item.id}/>
                        )
                    })
                }
            </div>

        </div>

    </div>
  )
}

export default AllProducts




{/* <div className="Frame__Products__item">
                {all_products.map((item,i)=>{
                return < Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
             </div> */}