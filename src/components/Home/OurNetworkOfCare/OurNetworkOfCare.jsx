import { useState } from "react";
import "./OurNetworkOfCare.css";
import callIcon from "../../../assets/fluent_call-16-filled.png";
import centerData from "../../../data/centerData";

const centres = Object.values(centerData);

const OurNetworkOfCare = () => {
  const [activeCentre, setActiveCentre] = useState(centres[0]);

  return (
    <section className="network-wrapper" id="network-of-care">
      <div className="network-container">

        {/* LEFT */}
        <div className="network-left">
          <h2>Our Network of Care</h2>

          <div className="location-grid">
            {centres.map((centre) => (
              <button
                key={centre.slug}
                className={`location-pill ${
                  activeCentre.slug === centre.slug ? "active" : ""
                }`}
                onClick={() => setActiveCentre(centre)}
              >
                {centre.name.replace("ICTC ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="network-card">

          {/* TITLE */}
          <h2 className="card-title">
            {activeCentre.name}
          </h2>

          {/* PHONE */}
          <div className="phone-badge">
            <img src={callIcon} alt="Call" />
            <span>
              {activeCentre.name.replace("ICTC ", "")}: {activeCentre.phone}
            </span>
          </div>

          {/* ADDRESS */}
          <div className="address-card">
            <span className="location-icon">📍</span>
            <span>
              <strong>
                {activeCentre.name.replace("ICTC ", "")}:
              </strong>{" "}
              {activeCentre.address}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurNetworkOfCare;