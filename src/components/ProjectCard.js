import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/st.css';

const ProjectCard = ({ title, description, image, status, onShowDetails }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-light rounded">
        <div className="card-img-container position-relative overflow-hidden rounded-top">
          <img src={image} className="card-img-top" alt="Project" />
          <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3">
            <div className="overlay-content text-white text-center">
              <h5 className="overlay-title fs-4 fw-bold">{title}</h5>
              <p className="overlay-description fs-6">{description}</p>
              <div className="card">
  <div className="card-body">
    <p className="overlay-status fs-6 mb-3 text-success">
      <strong></strong>
      <span className="card-text-status">{status}</span>
    </p>
  </div>
</div>
              <button className="btn btn-light w-100 py-2" onClick={() => onShowDetails({ title, description, image, status })}>
                <i className="fas fa-arrow-right"></i> {/* Right arrow icon */}
              </button>
            </div>
          </div>
        </div>
        <div className="card-body p-4">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <p className="text-muted text-center">
            <strong> </strong>
            <span className="card-text-status">{status}</span> {/* Apply the status class */}
          </p>
          <button className="btn btn-primary w-100" onClick={() => onShowDetails({ title, description, image, status })}>
             <i className="fas fa-chevron-right ms-2"></i> {/* Right arrow icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
