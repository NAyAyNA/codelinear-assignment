import "./CaseStudy.css";
import caseStudyImg from "../../assets/InsightImg.png";
import logo from "../../assets/t-logo-3.png";
import arrow from "../../assets/arrow.svg";

function CaseStudy() {

    return (
        <section className="case-study-section">

            <div className="case-study-main"> 

                <h2 className="case-study-header">
                    Our Case Studies
                </h2>


                    <div className="case-study-card">

                        <div className="case-study-image">

                            <img
                            src={caseStudyImg}
                            alt="case study"
                            />

                        </div>

                        <div className="case-study-content">

                            <p className="case-study-tag">
                                Getting Started
                            </p>

                            <h3 className="case-study-title">
                                How we help brand reach out to more people
                            </h3>

                            <img src={logo} />

                            <button className="case-study-btn">
                                Read More
                            </button>
                        </div>

                    </div>

                <a href="#" className="view-all-link">
                    View All <img src={arrow} />
                </a>

            </div>

            </section>
    )
  }
  
  export default CaseStudy