import "./Footer.css";
import logo from "../../../assets/ICTC_Logo(long).png";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
          <button 
            onClick={() => handleScroll("#about-us")}
            className="footer-link-btn"
          >
            About Us
          </button>
          <button 
            onClick={() => handleScroll("#network-of-care")}
            className="footer-link-btn"
          >
            Centres
          </button>
          <button 
            onClick={() => handleScroll("#cancers-we-treat")}
            className="footer-link-btn"
          >
            Cancers We Treat
          </button>
          <button 
            onClick={() => handleScroll("#meet-our-experts")}
            className="footer-link-btn"
          >
            Our Doctors
          </button>
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