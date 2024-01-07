import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <Logo type="VERTICAL" />
      </div>
      <div className="column">
        <h6>Doormat navigation</h6>
        <span>
          <Link
            style={{ textDecoration: "none", color: "#EDEFEE" }}
            to="/about">
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
            to="/about">
            Menu
          </Link>
        </span>
        <span>
          <Link
            style={{ textDecoration: "none", color: "#EDEFEE" }}
            to="/about">
            Order
          </Link>
        </span>
      </div>
      <div className="column">
        <h6>Contact details</h6>
        <span>Adress</span>
        <span>Phone Number</span>
        <span>Email</span>
      </div>
      <div className="column">
        <h6>Social media links</h6>
        <span>Instagram</span>
        <span>FaceBook</span>
        <span>YouTube</span>
      </div>
    </footer>
  );
};

export default Footer;
