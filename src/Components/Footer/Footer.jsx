import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname == "/reset-password" || location.pathname === '/new-password') {
    return null
  }
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo type="VERTICAL" />
      </div>
      <div className="footer-column">
        <h6>Doormat navigation</h6>
        <span>
          <Link style={{ textDecoration: "none", color: "#EDEFEE" }} to="/">
            Home
          </Link>
        </span>
        <span>
          <HashLink
            smooth
            style={{ textDecoration: "none", color: "#EDEFEE" }}
            to="/#about">
            About
          </HashLink>
        </span>
        <span>
          <Link
            style={{ textDecoration: "none", color: "#EDEFEE" }}
            to="/booking">
            Booking
          </Link>
        </span>
        <span>
          <Link style={{ textDecoration: "none", color: "#EDEFEE" }} to="/menu">
            Menu
          </Link>
        </span>
      </div>
      <div className="footer-column">
        <h6>Contact details</h6>
        <span>Adress</span>
        <span>Phone Number</span>
        <span>Email</span>
      </div>
      <div className="footer-column">
        <h6>Social media links</h6>
        <a href="https://instagram.com" target="_blank" style={{ textDecoration: "none", color: "#EDEFEE" }}><span>Instagram</span></a>
        <a href="https://youtube.com" target="_blank" style={{ textDecoration: "none", color: "#EDEFEE" }}><span>Youtube</span></a>
        <a href="https://www.facebook.com/" target="_blank" style={{ textDecoration: "none", color: "#EDEFEE" }}><span>FaceBook</span></a>
      </div>
    </footer>
  );
};

export default Footer;
