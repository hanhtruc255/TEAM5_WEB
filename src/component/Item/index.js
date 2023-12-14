import {memo} from "react";
import React from "react";
// import { Link } from "react-router-dom";
// import all_product from "../../assets/data/products";
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import "../Item/style.scss"

const Item = (props) =>{

    return (
        <div className="item" >
            <img src={props.image} alt="hinh"/>
            <p>
                {props.name}
            </p>
            <b> {props.price}</b>
            <div className="item__buy">
                <div>
                    <button>Mua ngay</button>
                </div>

                <div className="item__buy__icon">
                    <ul>
                        <li>
                            <button><BsHeart /></button>
                            </li>
                        <li> <button><BsCart3 />
                            </button> 
                            </li>
                    </ul>
                </div>
            </div>
            
        </div>
     
    )

};

export default memo(Item);