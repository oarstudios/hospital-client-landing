import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookAppointment.css";
import doctorImg from "../../../assets/ICTC female doctor 1.png";
import ThankYouPopup from "../../ThankYouPopup";

const BookAppointment = () => {
  /* ============================
     STATE
  ============================ */
  const [formData, setFormData] = useState({
    patientname: "",
    age: "",
    phone: "",
    source: "Landing_Website_Form",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* ============================
     INPUT CHANGE
  ============================ */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ============================
     VALIDATION
  ============================ */
  const validate = () => {
    const newErrors = {};

    if (!formData.patientname.trim()) {
      newErrors.patientname = "Patient name is required";
    }

    if (!formData.age || formData.age < 1 || formData.age > 120) {
      newErrors.age = "Enter a valid age";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit Indian number";
    } else if (/^(\d)\1{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ============================
     SUBMIT
  ============================ */
  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwFy2DrEnNXB3k_WPEDNBjmlNEd_oDRTXCHZZHZvaxPvpcO2vMURb0FRVYatabmM_vd/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setFormData({
          patientname: "",
          age: "",
          phone: "",
          source: "Landing_Website_Form",
        });
        setErrors({});
        navigate("success", { replace: false });
      } else {
        alert("Failed to save appointment");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ============================
     SUCCESS POPUP
  ============================ */
  const showThankYou = location.pathname.endsWith("/success");

  return (
    <>
      <ThankYouPopup
        open={showThankYou}
        onClose={() => navigate("..", { replace: true, relative: "path" })}
      />

      <section className="appointment-wrapper">
        <div className="appointment-card">
          <div className="appointment-form">
            <h2>Book an Appointment</h2>

            <p className="section-label">Patient Details</p>

            {/* NAME + AGE */}
            <div className="input-row">
              <input
                type="text"
                name="patientname"
                placeholder="Patient Name"
                value={formData.patientname}
                onChange={handleChange}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            {errors.patientname && (
              <span className="error">{errors.patientname}</span>
            )}
            {errors.age && <span className="error">{errors.age}</span>}

            {/* PHONE */}
            <div className="input-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
              />
            </div>

            {errors.phone && <span className="error">{errors.phone}</span>}

            {/* SUBMIT BUTTON */}
            <button
              className={`book-btn${isSubmitting ? " loading" : ""}`}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Appointment"}
            </button>
          </div>

          {/* IMAGE */}
          <div className="appointment-image">
            <img src={doctorImg} alt="Doctor" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;