import "./Footer.css";
import logo from "../../../assets/ICTC_Logo(long).png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Indian Cancer Treatment Centre" />
          </Link>
        </div>

        {/* NAV LINKS */}
        <div className="footer-links">
          <Link to="/aboutUs">About Us</Link>
          <Link to="/centres">Centres</Link>
          <Link to="/cancers">Cancers We Treat</Link>
          <Link to="/ourDoctors">Our Doctors</Link>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copy">
          © 2026 ICTC All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;