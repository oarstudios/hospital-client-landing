import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-header">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-subtitle">Page Not Found</p>
        </div>

        <p className="not-found-description">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <div className="not-found-actions">
          <button 
            className="btn-home"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
          <a 
            href="tel:+18858855200"
            className="btn-contact"
          >
            Call: 885 885 5200
          </a>
        </div>

        <div className="not-found-animation">
          <div className="floating-object"></div>
          <div className="floating-object"></div>
          <div className="floating-object"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
