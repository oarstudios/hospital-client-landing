import { useState } from "react";
import "./OurNetworkOfCare.css";
import callIcon from "../../../assets/fluent_call-16-filled.png";
import centerData from "../../../data/centerData";
import mapImage from "../../../assets/map.png";

const centres = Object.values(centerData);

const OurNetworkOfCare = () => {
  const [activeCentre, setActiveCentre] = useState(centres[0]); // ✅ simple state

  return (
    <section className="network-wrapper">
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

          <div className="network-stats">
            <h1>{centres.length}</h1>
            <p>
              Centres throughout
              <br />
              Mumbai & Growing
            </p>
          </div>
        </div>

        {/* RIGHT */}
      {/* RIGHT */}
<div className="network-map">

  {/* MAP IMAGE */}
 <img
  src={mapImage}
  alt="Map"
  className="static-map"
/>

  {/* PHONE BADGE (TOP LEFT like screenshot) */}
  <div className="map-phone-badge">
    <img src={callIcon} alt="Call" className="call-icon" />
    <span>
      {activeCentre.name.replace("ICTC ", "")}: {activeCentre.phone}
    </span>
  </div>

  {/* ADDRESS BOX (BOTTOM BIG CARD) */}
  <div className="map-address">
    <div className="address-row">
      <span className="location-dot">📍</span>
      <span>
        <strong>
          {activeCentre.name.replace("ICTC ", "")}:
        </strong>{" "}
        {activeCentre.address}
      </span>
    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default OurNetworkOfCare;