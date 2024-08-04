import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
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
          <Link
            style={{ textDecoration: "none", color: "#EDEFEE" }}
            to="/about">
            About
          </Link>
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
        <span>
          <Link
            style={{ textDecoration: "none", color: "#EDEFEE" }}
            to="/order">
            Order
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
        <span>Instagram</span>
        <span>FaceBook</span>
        <span>YouTube</span>
      </div>
    </footer>
  );
};

export default Footer;
