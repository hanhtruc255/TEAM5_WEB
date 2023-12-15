import {memo, useState} from "react";
import './Navbar.scss';
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from "../../ASSETS/LOGO-HomeTek.png";
import React from "react";
// import all_products from "../../../../assets/data/product";


const Navbar= () =>{
    

    const [Menus] = useState ([
        {category: "Về chúng tôi",
         path:"",
        },
        {category:"Bếp",
         path:  "/bep",
         isShowSubmenu: false,
         child: [
            {sub_category:"Tất cả sản phẩm",
            path: "/bep/tat-ca-san-pham",
            },
            {sub_category:"Nồi chiên không dầu",
            path: "bep/noi-chien-khong-dau",
            },
            {sub_category:"Nồi cơm thông minh",
            path: "/bep/noi-com-thong-minh",
            },
            {sub_category:"Máy rửa thực phẩm",
            path: "/bep/may-rua-thuc-pham",
            },
            {sub_category:"Máy khử trùng đồ dùng bếp",
            path: "/bep/may-khu-trung-do-dung-bep",
            }

         ]
        },
        {category: "Dọn dẹp",
         path: "/don-dep",
         isShowSubmenu: false,
         child: [
            {sub_category:"Tất cả sản phẩm",
            path: "/don-dep/tat-ca-san-pham",
            },
            {sub_category:"Robot hút bụi lau nhà",
            path: "/don-dep/robot-hut-bui-lau-nha",
            },
            {sub_category:"Máy lọc không khí thông minh",
            path: "/don-dep/may-luc-khong-khi-thong-minh",
            },
            {sub_category:"Bàn chải đa năng",
            path: "/don-dep/ban-chai-da-nang",
            }
         ]
        },
        {category: "Tiện ích",
         path: "/tien-ich",
         isShowSubmenu: false,
         child: [
            {sub_category:"Tất cả sản phẩm",
            path: "/tien-ich/tat-ca-san-pham",
            },
            {sub_category:"Máy tạo bọt rửa tay",
            path: "/tien-ich/may-tao-bot-rua-tay",
            },
            {sub_category:"Loa trợ lý ảo thông minh",
            path: "/tien-ich/loa-tro-ly-ao-thong-minh",
            },
            {sub_category:"Công tắc thông minh",
            path: "/tien-ich/cong-tac-thong-minh",
            }
         ]
        },
        {category: "Blog",
         path: "/blog"
        },
        {category: "Chính sách",
         path: "/chinh-sach"
        },
    ])
    return (
        <nav>
            <div className="Nav__top">
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
                                <Link to ={"/yeu-thich"}><BsHeart />
                                </Link>
                                </li>
                            <li> <Link to = {"/gio-hang"}><BsCart3 />
                                </Link> 
                                </li>
                            <li> <Link to ={"/dang-nhap"}><BsPerson />
                            </Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Nav__menu">
                <nav className="Menu">
                    <ul>
                        {Menus. map((menu,menukey) => (
                                <li key={menukey} className="active">
                                    <Link to ={menu?.path}  >{menu?.category}
                                    </Link>
                                    {menu.child &&(
                                        <ul className="header__menu__dropdown">
                                            {menu.child.map((childItem, childKey) =>(
                                                <li key={`${childItem}-${childKey}`}>
                                                    <Link to={childItem.path} >{childItem.sub_category}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                        )
                                    }
                                </li>
                        ))},
                    </ul>
                </nav>
            </div>

        </nav>
    )
};


export default memo(Navbar);
