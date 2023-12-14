import {memo} from "react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import all_product from "../../assets/data/product";

const Breadcrum = () =>{
    return (
        <div className="breadcrum_menu">
             Trang chủ <BsChevronRight />{all_product.category} <BsChevronRight />{all_product.sub_catagory}
        </div>)

};

export default memo(Breadcrum);