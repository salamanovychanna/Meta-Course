import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import Cart from "../Pages/Cart";
import Profile from "../Pages/Profile";
import Order from "../Pages/Order";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<Order/>}/>

            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    );
};

export default MainRoutes;