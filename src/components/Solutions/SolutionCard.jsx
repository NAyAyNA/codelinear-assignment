import arrow from "../../assets/arrow.svg";

function SolutionCard({ icon, title, description }) {
    return (
      <div className="solution-card">
  
        <img
          src={icon}
          alt="icon"
          className="solution-icon"
        />
  
        <h3 className="solution-title">
          {title}
        </h3>
  
        <p className="solution-description">
          {description}
        </p>
  
        <a href="#" className="solution-link">
          Learn More <img src={arrow} />
        </a>
  
      </div>
    );
  };

  export default SolutionCard;