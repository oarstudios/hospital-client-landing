import "./MeetOurExperts.css";
import { useNavigate } from "react-router-dom";
import doctorData from "../../../data/doctorData";

const MeetOurExperts = () => {
  const navigate = useNavigate();
  const doctors = Object.values(doctorData);

  return (
    <section className="experts-section" id="meet-our-experts">
      {/* HEADER */}
      <div className="experts-header">
        <h2>Our Team of Experts</h2>
      </div>

      {/* GRID (same class name) */}
      <div className="experts-slider">
        {doctors.map((doc) => (
          <div
            className="doctor-card-home"
            key={doc.slug}
          >
            {/* IMAGE */}
            <div className="doctor-img-wrapper">
              <img src={doc.image} alt={doc.name} />

              <div className="doctor-hover">
                <button className="view-profile-btn" onClick={() => navigate("/contactUs")}>
                  Learn More <span>→</span>
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="doctor-content">
              <h3>{doc.name}</h3>

              <p className="doctor-qualification">
                {doc.qualification.split(",").map((item, index) => (
                  <span key={index}>
                    {item.trim()}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            {/* TAG */}
            {/* <div className="doctor-tag">{doc.designation}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurExperts;