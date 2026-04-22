import "./Navbar.css";
import logo from "../../../assets/ICTC_Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <span>
          Mail Us at: info@ictconco.org
        </span>

        <span>
          ICTC Helpline:{" "}
          <span className="diffColor">
            885 885 5200
          </span>
        </span>
      </div>

      {/* NAVBAR */}
      <div className="navbar-wrapper">
        <nav className="navbar">

          {/* LOGO */}
          <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="ICTC Logo" />
          </div>

          {/* BUTTON */}
          <button
            className="appointment-btn"
            onClick={() => navigate("/contactUs")}
          >
            Book an Appointment
          </button>

        </nav>
      </div>
    </>
  );
};

export default Navbar;