import {memo} from "react";
import Navbar from "../../../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../../../COMPONENTS/BannerSlider/BannerSlider";
import Category from "../../../COMPONENTS/Products/Category";


const HomePage = () =>{
        return(<div>
        <Navbar/>
        <BannerSlider/>
        <Category/>
        

        
       </div>)
}

export default memo(HomePage)