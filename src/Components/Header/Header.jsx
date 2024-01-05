import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <nav className="nav"> 
                <li className="nav-link"><Link style={{textDecoration:'none', color:'#EDEFEE'}} to="/about">About</Link></li>
                <li className="nav-link"><Link style={{textDecoration:'none', color:'#EDEFEE'}} to="/menu">Menu</Link></li>
                <li className="nav-link"><Link style={{textDecoration:'none', color:'#EDEFEE'}} to="/cart">Cart</Link></li>
                <li className="nav-link"><Link style={{textDecoration:'none', color:'#EDEFEE'}} to="/order">Order</Link></li>
            </nav>
        </header>
    );
};

export default Header;