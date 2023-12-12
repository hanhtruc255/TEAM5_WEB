import {memo} from "react";
import './style.scss';
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Header= () =>{
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="./Images/LOGO-HomeTek.png"></img>
                    </div>
 
                    <div className="col-6 header_top_right">
                        <ul>
                            <li>
                                <Link to ={""}><BsHeart /></Link>
                                </li>
                            <li> <Link to = {""}><BsCart3 />
                                </Link> 
                                </li>
                            <li> <Link to ={""}><BsPerson />
                                {/* <br><span>Đăng nhập</span>
                                <span>Đăng ký</span></br> */}
                            </Link>
                                </li>
                        </ul>
                    </div>
                </div>

                
            </div>

        </div>
    )
};

export default memo(Header);