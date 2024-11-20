
import '../styles/Home.css'

const Services = () => {
  return (
    <div className="services-container">
        <h2>Découvrez nos services</h2>
      <div className="main-image-container">
      
        <img src="./service1.jpg" alt="Main Service" className="main-image-service" />
       
      </div>
      <div className="service-list">
        <div className="service-item">
          <img src="./img1.jpeg" alt="Service 1" className="service-image" />
          <div className="service-text">
            <h3>Titre 1</h3>
            <p>Description description description description description</p>
          </div>
        </div>
        <div className="service-item">
          <img src="./image3.jpeg" alt="Service 2" className="service-image" />
          <div className="service-text">
            <h3>Titre 2</h3>
            <p>Description description description description description</p>
          </div>
        </div>
        <div className="service-item">
          <img src="./image2.jpg" alt="Service 3" className="service-image" />
          <div className="service-text">
            <h3>Titre 3</h3>
            <p>Description description description description description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
