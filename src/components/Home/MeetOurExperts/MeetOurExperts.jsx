import "./MeetOurExperts.css";
import doctorData from "../../../data/doctorData";

const MeetOurExperts = () => {
const doctors = Object.values(doctorData);

  return (
    <section className="experts-section">
      {/* HEADER */}
      <div className="experts-header">
        <h2>Meet Our Experts</h2>
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
                <button className="view-profile-btn">
                  View Complete Profile <span>→</span>
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
            <div className="doctor-tag">{doc.designation}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurExperts;