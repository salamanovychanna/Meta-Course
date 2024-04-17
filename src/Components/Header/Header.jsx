import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../Logo/Logo";
import "./Header.css";
import Button from "../Button";
import { useEffect, useState } from "react";

const Header = () => {
  const [modalNav, setModalNav] = useState(false)
  const [iconWidth, setIconWidth] = useState('42')
  const [logoWidth, setLogoWidth] = useState('200')

  const isSmallWidth = () => {
    if (window.innerWidth <=280) {
      setLogoWidth('130')
      setIconWidth('30')
    } else if (window.innerWidth <=480) {
      setLogoWidth('150')
      setIconWidth('35')
    } else if (window.innerWidth <= 800) {
      setLogoWidth('180')
      setIconWidth('38')
    } else {
      setLogoWidth('200')
      setIconWidth('42')
    }
  };

  window.addEventListener("resize", isSmallWidth);

  useEffect(() => {
    isSmallWidth()
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <Link style={{ textDecoration: "none", color: "#EDEFEE" }} to='/'>
        <Logo width={logoWidth}/></Link>
          <button aria-label="Navigation button" onClick={()=>setModalNav(prev=>!prev)} className={'header-no-btn'}>
            <svg
              width={iconWidth}
              height="21"
              viewBox="0 0 42 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H42V3H0V0Z"
                fill="#EDEFEE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 9H42V12H0V9Z"
                fill="#EDEFEE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 18H42V21H0V18Z"
                fill="#EDEFEE"
              />
            </svg>
          </button>
          <nav  className={`header-nav ${modalNav ? 'header-nav-absolute' : 'header-none'}`}>
            <li className="header-nav-link" onClick={()=>setModalNav(false)}>
              <HashLink
                smooth 
                style={{ textDecoration: "none", color: "#EDEFEE" }}
                to="/#about">
                About
              </HashLink>
            </li>
            <li className="header-nav-link" onClick={()=>setModalNav(false)}>
              <Link
                style={{ textDecoration: "none", color: "#EDEFEE" }}
                to="/menu">
                Menu
              </Link>
            </li>
            <li className="header-nav-link" onClick={()=>setModalNav(false)}>
              <Link
                style={{ textDecoration: "none", color: "#EDEFEE" }}
                to="/booking">
                Booking
              </Link>
            </li>
            <li className={`header-nav-link header-nav-link-login`} onClick={()=>setModalNav(false)}>
              <Link
                style={{ textDecoration: "none", color: "#EDEFEE" }}
                to="/">
                Profile
              </Link>
            </li>
          </nav>
          <Button className='header-login-btn'>Login</Button>
      </div>
    </header>
  );
};

export default Header;
