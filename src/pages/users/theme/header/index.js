import {memo, useState} from "react";
import './style.scss';
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from '/HOMETEK_PJ/fe/src/assets/user/Images/LOGO-HomeTek.png';
import React from "react";


const Header= () =>{
    const [Menus, setMenus] = useState ([
        {name: "Về chúng tôi",
         path: ""
        },
        {name:"Bếp",
         path: "",
         isShowSubmenu: false,
         child: [
            {name:"Tất cả sản phẩm",
            path: "",
            },
            {name:"Nồi chiên không dầu",
            path: "",
            },
            {name:"Nồi cơm thông minh",
            path: "",
            },
            {name:"Máy sửa thực phẩm",
            path: "",
            },
            {name:"Máy khử trùng đồ dùng bếp",
            path: "",
            }

         ]
        },
        {name: "Dọn dẹp",
         path: "",
         isShowSubmenu: false,
         child: [
            {name:"Tất cả sản phẩm",
            path: "",
            },
            {name:"Robot hút bụi lau nhà",
            path: "",
            },
            {name:"Máy lọc không khí thông minh",
            path: "",
            },
            {name:"Bàn chải đa năng",
            path: "",
            }
         ]
        },
        {name: "Tiện ích",
         path: "",
         isShowSubmenu: false,
         child: [
            {name:"Tất cả sản phẩm",
            path: "",
            },
            {name:"Máy tạo bọt rửa tay",
            path: "",
            },
            {name:"Loa trợ lý ảo thông minh",
            path: "",
            },
            {name:"Công tắc thông minh",
            path: "",
            }
         ]
        },
        {name: "Blog",
         path: ""
        },
        {name: "Chính sách",
         path: ""
        },
    ])

    return (
        <div>
            <div className="header__top">
                <div className="row">
                    <div className="header__top__left">
                        <Link to={"/"}> <img src={logo} alt="logo"></img></Link>
                    </div>

                    <div className="header__top__midle">
                        <input type="text" placeholder="Bạn muốn tìm gì..."/>
                            <Link to={""} className="iconSearch"><BsSearch /></Link>
                        
                    </div>
 
                    <div className="header__top__right">
                        <ul>
                            <li>
                                <Link to ={""}><BsHeart /></Link>
                                </li>
                            <li> <Link to = {""}><BsCart3 />
                                </Link> 
                                </li>
                            <li> <Link to ={""}><BsPerson />
                            </Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__menu">
                <nav className="Menu">
                    <ul>
                        {Menus?. map((menu,menukey) => (
                                <li key={menukey} className="active">
                                    <Link to ={menu?.path}>{menu?.name}
                                    </Link>
                                    {menu.child &&(
                                        <ul className="header__menu__dropdown">
                                            {menu.child.map((childItem, childKey) =>(
                                                <li key={`${childItem}-${childKey}`}>
                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                </li>
                                            )

                                            )}
                                    
                                        </ul>
                                        )
                                    }

                                </li>
                        ))},
                    </ul>
                </nav>
            </div>

        </div>
    )
};


export default memo(Header);