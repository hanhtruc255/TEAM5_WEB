import {memo} from "react";
import React from "react";
import Products from "../../../component/products";
// import { BsChevronRight } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import Header from "../theme/header";

const ProductPage = () =>{
    
    return (
        <div className="Product__Page">
            {/* <div className="Breadcrum__menu">
            Trang chủ <BsChevronRight />{menu?.category} <BsChevronRight />{menu?.sub_catagory}
            </div>
            
            <nav>
                sidebar
            </nav> */}

            <div className="Products">
                <Products/>
            </div>
        </div>
     
    )

};

export default memo(ProductPage);