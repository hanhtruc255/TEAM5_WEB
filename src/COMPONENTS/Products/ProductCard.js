import React from 'react';
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import "./ProductCard.scss"

const ProductCard = ({data}) => {
  return (
    <div className="item" >
          <div>
              <img src={data.image} alt="hinh"/>
          </div>
          <div>
            <h4><span>{data.name}</span></h4>
          </div>
          <div><b><span>{data.price}</span></b></div>
            <div className="item__buy">
                <div>
                    <button>Mua ngay</button>
                </div>

                <div className="item__buy__icon">
                    <ul>
                        <li>
                            <button><BsHeart />
                            </button>
                            </li>
                        <li> <button><BsCart3 />
                            </button> 
                            </li>
                    </ul>
                </div>
            </div>
            
        </div>
  )
}

export default ProductCard