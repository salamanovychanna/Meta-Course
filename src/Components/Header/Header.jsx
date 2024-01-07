import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";
import Button from "../Button";
import { useEffect, useState } from "react";

const Header = () => {
  const [smallWidth, setSmallWidth] = useState(false);
  const isSmallWidth = () => {
    if (window.innerWidth <= 800) {
      setSmallWidth(true);
    } else {
      setSmallWidth(false);
    }
  };
  window.addEventListener("resize", isSmallWidth);
  useEffect(() => {
    isSmallWidth()
}, []);
  return (
    <header className="header">
      <div className="content">
        <Link style={{ textDecoration: "none", color: "#EDEFEE" }} to='/'>
        <Logo /></Link>
        {smallWidth ? (
          <button className="no-btn">
            <svg
              width="42"
              height="21"
              viewBox="0 0 42 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H42V3H0V0Z"
                fill="#EDEFEE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 9H42V12H0V9Z"
                fill="#EDEFEE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 18H42V21H0V18Z"
                fill="#EDEFEE"
              />
            </svg>
          </button>
        ) : (
          <nav className="nav">
            <li className="nav-link">
              <Link
                style={{ textDecoration: "none", color: "#EDEFEE" }}
                to="/about">
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link
                style={{ textDecoration: "none", color: "#EDEFEE" }}
                to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-link">
              <Link
                style={{ textDecoration: "none", color: "#EDEFEE" }}
                to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-link">
              <Link
                style={{ textDecoration: "none", color: "#EDEFEE" }}
                to="/order">
                Order
              </Link>
            </li>
          </nav>
        )}
        {smallWidth ? null : <Button>Login</Button>}
      </div>
    </header>
  );
};

export default Header;
