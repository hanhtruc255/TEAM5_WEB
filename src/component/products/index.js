import {memo} from "react";
import React from "react";
import all_product from "../../assets/data/product";
import Item from "../Item/index"
import "../products/style.scss"
const Products = () =>{
    
    return (
        <div>
            <div>
                {/* {products.map((item, i) => {
                    return <Item key={i} id = {item.sub_categor}/>
            })} làm cái render AND usestate */}
            </div>
            <div className="Products_item">
                {all_product.map((item,i)=>{
                return < Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
             </div>
        </div>
       
     
    )

};

export default memo(Products);