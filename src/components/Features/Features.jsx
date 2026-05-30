import "./Features.css";
import Contact from "../Contact/Contact";
import featureDashboardImg from "../../assets/graph-2.png";
import checkIcon from "../../assets/check.svg";


const column1Data = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)"
];
  
  
  
const column2Data = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."
];

function Features() {

    return (
        <>
        <section className="features-section">
            <div className="features-left">

                <div className="features-img-container">

                    <img
                    src={featureDashboardImg}
                    alt="dashboard"
                    className="features-img"
                    />

                </div>

            </div>  

            <div className="features-right">

                <h2 className="features-header">
                    Run a more efficient, flexible, and digitally<br />connected corebanking system
                </h2>



                <div className="features-content">
                    <div className="features-block">

                        <p className="features-subtitle">
                        What you will get:
                        </p>
                        <div className="features-grid">
                            <div className="features-column">

                                {column1Data.map((item, index) => (
                                    <div className="feature-item" key={index}>
                                        <img src={checkIcon} />
                                        <p>{item}</p>
                                    </div>
                                ))}

                            </div>

                            <div className="features-column">
                                {column2Data.map((item, index) => (
                                    <div className="feature-item" key={index}>
                                    <img src={checkIcon} />
                                    <p>{item}</p>
                                    </div>

                                ))}

                            </div>         
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="features-contact">
            <Contact />
        </div>
        </>
    )
  }
  
  export default Features;