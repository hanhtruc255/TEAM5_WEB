import Homepage from "./pages/users/homepage";
import MasterLayout from "./pages/users/theme/masterLayout";
import {ROUTERS} from "./utils/router";
import { Routes, Route} from "react-router-dom";
import Cart from "./pages/users/cart";
import AboutUs from "./pages/users/aboutus";



const renderUserRouter=() =>{
    const userRouters = [
        {path: ROUTERS.USER.HOME,
            component:<Homepage/>
        },
        {path: ROUTERS.USER.CART,
            component:<Cart/>
        },
        {path: ROUTERS.USER.ABOUTUS,
            component:<AboutUs/>
        },
        
        
    ];
    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item,key)=>(
                    <Route key={key} path={item.path} element ={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};
const RouterCustom =() => {
    return renderUserRouter();

};

export default RouterCustom;
