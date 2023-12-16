import React from 'react'
import "./CategorySitebar.scss"
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CategorySidebar = ({data}) => {
    // const 
    const Data_Cate = [
        {id: 1,
        category: "Bếp",
        chidrend:[
            {id: 1,
                sub_category: "bếp 1",},

            {id: 2,
                sub_category: "bếp 2"}]
        },
        {id: 2,
        category: "Dọn dẹp",
        chidrend:[
            {id: 1,
                sub_category: "dọn dẹp 1",},

            {id: 2,
                sub_category: "dọn dẹp 1"}]
        },
        {id: 3,
        category: "Tiện ích",
        chidrend:[
            {id: 1,
                sub_category: "tiện ích",},

            {id: 2,
                sub_category: "tiện ích 2"}]
        },
        
        ]
  return (    
        <div className='Category__Sidebar'>
                {Data_Cate.map((item) =>
                {return (
                        <div> 
                            <ul>
                                <Link to={`/home/`}>
                                    <li>
                                    <BsList className='con_cate'/>
                                    <h4> {item.category}</h4>
                                    </li>
                                </Link>
                            </ul>
                            
                        </div>)
                    }
                    )
                }            

        </div>
  )
}

export default CategorySidebar
