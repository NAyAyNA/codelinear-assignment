import checkIcon from "../../assets/check.svg";

function DigitalCard({ image, title, desc, points, reverse }) {
    return (
        <div className={`phone-feature-card ${reverse ? "reverse" : ""}`}>
  
        <div className="phone-image-wrapper">
          <img
            src={image}
            alt={title}
            className="phone-image"
          />
        </div>
  
        <div className="card-content">
  
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{desc}</p>
  
          <div className="feature-points">
  
            {points.map((point, index) => (
              <div
                className="feature-point"
                key={index}
              >
                <img
                  src={checkIcon}
                  alt="check"
                  className="check-icon"
                />
  
                <span>{point}</span>
              </div>
            ))}
  
          </div>
  
        </div>
  
      </div>
    );
  }

  export default DigitalCard;