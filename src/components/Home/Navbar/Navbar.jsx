import "./Navbar.css";
import logo from "../../../assets/ICTC_Logo.png";

const Navbar = () => {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <span>
          Mail Us at: <a href="mailto:info@ictconco.org">info@ictconco.org</a>
        </span>

        <span>
          ICTC Helpline:{" "}
          <a href="tel:+918858855200" className="diffColor">
            885 885 5200
          </a>
        </span>
      </div>

      {/* NAVBAR */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          
          {/* LOGO */}
          <div className="logo">
            <img src={logo} alt="ICTC Logo" />
          </div>

          {/* BUTTON */}
          <button className="appointment-btn">
            Book an Appointment
          </button>

        </nav>
      </div>
    </>
  );
};

export default Navbar;