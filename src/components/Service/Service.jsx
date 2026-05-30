import "./Service.css";
import dashboardImg from "../../assets/graph-1.png";
import arrow from "../../assets/arrow.svg";

function Service() {
    return (
        <section className="service-section">
            {/* LEFT */}
            <div className="service-left">
                <h2 className="service-heading">
                    A complete cloud-based<br />core banking.
                </h2>

                <p className="service-description">
                Faster time to market with our cloud-based<br />core banking services
                </p>

                <button className="service-btn">
                    REQUEST DEMO
                </button>

                <a href="#" className="service-link">
                    LEARN MORE <img src={arrow} />
                </a>
            </div>
            
            {/* RIGHT */}
            <div className="service-right">

                <div className="dashboard-container">

                    <img
                    src={dashboardImg}
                    alt="dashboard"
                    className="dashboard-img"
                    />

                </div>
            </div>

        </section>
    )
}
  
export default Service;

