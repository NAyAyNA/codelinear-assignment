import "./Insights.css";
import insightsImg from "../../assets/InsightImg.png";
import arrow from "../../assets/arrow.svg";
import InsightsCard from './InsightsCard';

function Insights() {

    return (
        <section className="insights-section">

            <div className="insights-left">

                <h2 className="insights-heading">
                    Get yourself up-to-speed on<br /> all the things happening in<br />fintech
                </h2>

                <button className="insights-btn">
                    Insights
                </button>

            </div>
            {/* RIGHT */}
            <div className="insights-right">

                <div className="insights-row-one">

                    <img
                        src={insightsImg}
                        alt="insights"
                        className="insights-image"
                    />
                    <InsightsCard />
                </div>

                <div className="insights-row-two">
                    <InsightsCard />
                    <InsightsCard />
                </div>

                <a className="insights-link">
                READ ALL INSIGHTS<img src={arrow} />
                </a>

            </div>
        </section>
    )
  }
  
  export default Insights